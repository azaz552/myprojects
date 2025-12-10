import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoForm() {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = task.trim();
    if (!text) return;

    if (editing) {
      dispatch({ type: "EDIT_TODO", payload: { id: editing, text } });
      setEditing(null);
    } else {
      dispatch({ type: "ADD_TODO", payload: text });
    }
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button
        type="submit"
        style={{
          backgroundColor: editing ? "gold" : "blue",
          color: "white",
        }}
      >
        {editing ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}











/////////////////////////////////////////////////////////////

// 🧩 On importe les hooks React nécessaires
import { useContext, useState } from "react";

// 📦 On importe le contexte pour accéder à dispatch
import { TodoContext } from "../context/TodoContext";


// 🧱 Composant du formulaire
export default function TodoForm() {

  // 🪣 On récupère dispatch depuis le contexte (grâce à useContext)
  // dispatch nous permet d’envoyer des actions au reducer
  const { dispatch } = useContext(TodoContext);

  // 📝 État local pour le texte de la tâche
  const [task, setTask] = useState("");

  // ✏️ État local pour savoir si on est en mode “édition”
  const [editing, setEditing] = useState(null);


  // ⚙️ Fonction appelée quand on soumet le formulaire (clic sur bouton)
  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    const text = task.trim(); // supprime les espaces inutiles
    if (!text) return; // si le champ est vide, on ne fait rien


    // 🟨 Si on est en mode édition :
    if (editing) {
      // On envoie une action au reducer pour modifier la tâche
      dispatch({ type: "EDIT_TODO", payload: { id: editing, text } });
      setEditing(null); // on sort du mode édition

    } else {
      // 🟩 Sinon → on ajoute une nouvelle tâche
      dispatch({ type: "ADD_TODO", payload: text });
    }

    // 🧹 On vide le champ après ajout ou modification
    setTask("");
  };


  // 🎨 Partie affichage (UI)
  return (
    <form onSubmit={handleSubmit} className="input-group">
      {/* Champ de saisie du texte */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // on met à jour le state task à chaque frappe
        placeholder="Ajouter une tâche..."
      />

      {/* Bouton qui change de couleur et de texte selon le mode */}
      <button
        type="submit"
        style={{
          backgroundColor: editing ? "gold" : "blue", // jaune = modifier, bleu = ajouter
          color: "white",
        }}
      >
        {editing ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}





dispatch=livreur(qui sert a transmettre un message )
👉 dispatch = une fonction spéciale pour envoyer une action à ton reducer.