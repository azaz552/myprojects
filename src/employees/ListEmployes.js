import { useContext } from "react";
import { EmployeContext } from "../context/EmployeContext";

export default function ListEmploye() {
  const { state, dispatch } = useContext(EmployeContext);

  // Fonction pour démarrer l’édition d’un employé
  const startEdit = (emp) => {
    dispatch({ type: "EDIT_MODE", payload: emp });
  };

  return (
    <div>
      <h3>Liste des employés</h3>
      <button
        onClick={() => dispatch({ type: "CLEAR_EMPLOYES" })}
        style={{ marginBottom: 10 }}
      >
        Supprimer tout
      </button>

      {state.employes.length === 0 ? (
        <p>Aucun employé ajouté</p>
      ) : (
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
            {state.employes.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.nom}</td>
                <td>
                  {emp.image && (
                    <img src={emp.image} alt={emp.nom} width="50" />
                  )}
                </td>
                <td>{emp.salaire}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_EMPLOYE", payload: emp.id })
                    }
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
