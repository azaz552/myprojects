import React, { createContext, useReducer, useState } from "react";

// 1️⃣ Créer le contexte
export const EmployeContext = createContext();

// 2️⃣ Initial State
const initialState = { employes: [] };

// 3️⃣ Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { employes: [...state.employes, action.payload] };
    case "remove":
      return { employes: state.employes.filter(emp => emp.id !== action.payload) };
    case "edit":
      return {
        employes: state.employes.map(emp =>
          emp.id === action.payload.id ? { ...emp, ...action.payload } : emp
        )
      };
    case "clear":
      return { employes: [] };
    default:
      return state;
  }
};

// 4️⃣ Provider + Component Employes
export const EmployeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, setForm] = useState({ id: null, nom: "", image: "", salaire: "" });
  const [editing, setEditing] = useState(false);

  // Ajouter / Modifier
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom || !form.salaire) return;

    if (editing) {
      dispatch({ type: "edit", payload: form });
      setEditing(false);
    } else {
      dispatch({ type: "add", payload: { ...form, id: Date.now() } });
    }
    setForm({ id: null, nom: "", image: "", salaire: "" });
  };

  const startEdit = (emp) => {
    setForm(emp);
    setEditing(true);
  };

  const remove = (id) => dispatch({ type: "remove", payload: id });
  const clearAll = () => dispatch({ type: "clear" });

  return (
    <EmployeContext.Provider value={{ state, handleSubmit, form, setForm, editing, startEdit, remove, clearAll }}>
      {children}
    </EmployeContext.Provider>
  );
};

// 5️⃣ Component principal pour afficher la liste et le formulaire
export const Employes = () => {
  const { state, handleSubmit, form, setForm, editing, startEdit, remove, clearAll } = React.useContext(EmployeContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 Liste des Employés</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          placeholder="Nom"
          value={form.nom}
          onChange={e => setForm({ ...form, nom: e.target.value })}
          required
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
        />
        <input
          placeholder="Salaire"
          type="number"
          value={form.salaire}
          onChange={e => setForm({ ...form, salaire: e.target.value })}
          required
        />
        <button type="submit">{editing ? "Modifier" : "Ajouter"}</button>
        {editing && <button type="button" onClick={() => { setForm({ id: null, nom: "", image: "", salaire: "" }); }}>Annuler</button>}
      </form>

      <button onClick={clearAll} style={{ marginBottom: 10 }}>Tout Supprimer</button>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Image</th>
            <th>Salaire</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.employes.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nom}</td>
              <td>{emp.image && <img src={emp.image} alt={emp.nom} width="50" />}</td>
              <td>{emp.salaire}</td>
              <td>
                <button onClick={() => startEdit(emp)}>Edit</button>
                <button onClick={() => remove(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
