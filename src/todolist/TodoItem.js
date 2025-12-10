import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className="task-item">
      <span
        onClick={() => dispatch({ type: "TOGGLE_DONE", payload: todo.id })}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <div className="buttons">
        <button
          onClick={() =>
            dispatch({
              type: "EDIT_TODO",
              payload: { id: todo.id, text: prompt("Modifier:", todo.text) },
            })
          }
          style={{ backgroundColor: "blue", color: "white" }}
        >
          ✏️
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          style={{ backgroundColor: "red", color: "white" }}
        >
          ❌
        </button>
      </div>
    </li>
  );
}



dispatch({ type: "ADD_TODO", payload: text })
➡️ signifie : “Dis au reducer d’ajouter une nouvelle tâche avec ce texte”.