import { createContext, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};




///////////////////////////////////////////////////

// 🧩 On importe les outils nécessaires de React
import { createContext, useReducer } from "react";

// 🧰 On importe notre reducer (qui contient la logique des actions)
import { todoReducer } from "./todoReducer";


// 🪣 On crée le contexte (un “espace de partage”)
export const TodoContext = createContext();
// 👉 Ce contexte servira à partager les données (state + dispatch)
//    entre tous les composants sans avoir à passer des props partout


// 🧱 On crée le composant Provider qui enveloppera toute l’app
export const TodoProvider = ({ children }) => {

  // 🧠 useReducer remplace useState ici
  // - todoReducer = la fonction qui décrit comment le state change
  // - [] = le state initial (ici une liste vide de todos)
  // - useReducer renvoie [stateActuel, fonctionDispatch]
  const [todos, dispatch] = useReducer(todoReducer, []);

  // 🛠️ On partage les valeurs via le Provider du contexte
  // value = { todos, dispatch } → les composants pourront y accéder
  // grâce à useContext(TodoContext)
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children} {/* 🔹 tous les composan*




todos → la liste actuelle des tâches

dispatch → pour ajouter, supprimer, modifier une tâche










import React,{createContext,usereducer} form "react";
import todoreducer from "./todoReducer";

export const todoContext=createContext();

export const todoProvider({children})=>{
    const[todos,dispatch]=useReducer(todosReducer,[])
    }

    