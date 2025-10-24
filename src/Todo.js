// import React, { useReducer, useState } from "react";

// // reducer: هنا كنديرو المنطق ديال التغييرات
// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       // payload فيها task الجديدة
//       return [...state, { id: Date.now(), text: action.payload, done: false }];

//     case "toggle":
//       // payload فيها id ديال المهمة اللي بغينا نقلب حالتها
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       );

//     case "delete":
//       // payload فيها id ديال المهمة اللي بغينا نحيدوها
//       return state.filter((todo) => todo.id !== action.payload);

//     default:
//       return state;
//   }
// }

// export default function TodoApp() {
//   const [todos, dispatch] = useReducer(reducer, []); // الحالة الأولية: لائحة خاوية
//   const [text, setText] = useState("");

//   const handleAdd = () => {
//     if (text.trim() === "") return;
//     // هنا كنستعمل payload باش نسيفط النص ديال المهمة
//     dispatch({ type: "add", payload: text });
//     setText("");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>📝 To-Do List</h2>

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Add new task"
//       />
//       <button onClick={handleAdd}>Add</button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span
//               onClick={() => dispatch({ type: "toggle", payload: todo.id })}
//               style={{
//                 textDecoration: todo.done ? "line-through" : "none",
//                 cursor: "pointer",
//               }}
//             >
//               {todo.text}
//             </span>
//             <button
//               onClick={() => dispatch({ type: "delete", payload: todo.id })}
//               style={{ marginLeft: 10 }}
//             >
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useReducer, useState } from "react";

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, done: false }];

    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    case "edit":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: "add", payload: text });
    setText("");
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    dispatch({ type: "edit", payload: { id, text: editText } });
    setEditingId(null);
    setEditText("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 To-Do List with Edit</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => dispatch({ type: "toggle", payload: todo.id })}
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                >
                  {todo.text}
                </span>
                <div>
                  <button onClick={() => startEdit(todo)}>✏️</button>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: todo.id })
                    }
                    style={{ marginLeft: 5 }}
                  >
                    ❌
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
