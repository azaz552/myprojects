import { useContext, useState } from "react";
import { EmployeContext } from "../context/EmployeContext";

export default function EmployeForm() {
  const { dispatch } = useContext(EmployeContext);

  // State local pour le formulaire
  const [form, setForm] = useState({
    id: null,
    nom: "",
    image: "",
    salaire: "",
  });

  const [editing, setEditing] = useState(false);

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nom || !form.salaire) return;

    if (editing) {
      // Modifier employé
      dispatch({ type: "EDIT_EMPLOYE", payload: form });
      setEditing(false);
    } else {
      // Ajouter un nouvel employé
      dispatch({
        type: "ADD_EMPLOYE",
        payload: { ...form, id: Date.now() },
      });
    }

    // Réinitialiser le formulaire
    setForm({ id: null, nom: "", image: "", salaire: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Nom de l’employé"
        value={form.nom}
        onChange={(e) => setForm({ ...form, nom: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Lien de l’image"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <input
        type="number"
        placeholder="Salaire"
        value={form.salaire}
        onChange={(e) => setForm({ ...form, salaire: e.target.value })}
        required
      />
      <button type="submit">{editing ? "Modifier" : "Ajouter"}</button>
      {editing && (
        <button
          type="button"
          onClick={() => {
            setEditing(false);
            setForm({ id: null, nom: "", image: "", salaire: "" });
          }}
        >
          Annuler
        </button>
      )}
    </form>
  );
}
