import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function ListTodo({ filter }) {
  const { todos } = useContext(TodoContext);

  const filtered =
    filter === "done"
      ? todos.filter((t) => t.done)
      : filter === "pending"
      ? todos.filter((t) => !t.done)
      : todos;

  return (
    <ul className="task-list">
      {filtered.length ? (
        filtered.map((t) => <TodoItem key={t.id} todo={t} />)
      ) : (
        <p>Aucune tâche trouvée</p>
      )}
    </ul>
  );
}
*










// 🧩 On importe useContext pour accéder au contexte global
import { useContext } from "react";

// 📦 On importe notre contexte (qui contient todos et dispatch)
import { TodoContext } from "../context/TodoContext";

// 🧱 On importe le composant qui affiche UNE tâche (TodoItem)
import TodoItem from "./TodoItem";


// 🗂️ Composant qui affiche la LISTE des tâches
// Il peut recevoir une prop "filter" (optionnelle) pour filtrer les tâches
export default function ListTodo({ filter }) {

  // 🪣 On récupère le state global (la liste des todos)
  // grâce à useContext
  const { todos } = useContext(TodoContext);


  // 🔍 On filtre les tâches selon le filtre reçu
  // - "done" => on garde seulement celles qui sont faites (t.done === true)
  // - "pending" => seulement celles qui ne sont pas faites
  // - sinon => on garde tout (aucun filtre)
  const filtered =
    filter === "done"
      ? todos.filter((t) => t.done)
      : filter === "pending"
      ? todos.filter((t) => !t.done)
      : todos;


  // 🎨 On affiche la liste filtrée
  return (
    <ul className="task-list">

      {/* ✅ Si la liste n’est pas vide */}
      {filtered.length ? (
        // On affiche chaque tâche avec le composant TodoItem
        filtered.map((t) => <TodoItem key={t.id} todo={t} />)
      ) : (
        // ❌ Sinon, message quand il n’y a aucune tâche
        <p>Aucune tâche trouvée</p>
      )}

    </ul>
  );
}
