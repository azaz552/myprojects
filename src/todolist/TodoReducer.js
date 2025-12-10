export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [{ id: Date.now(), text: action.payload, done: false }, ...state];

    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.payload);

    case "TOGGLE_DONE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );

    case "EDIT_TODO":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, text: action.payload.text } : t
      );

    default:
      return state;
  }
};



//*************************************************** */
switch (action.type) {
  case "ADD_TODO":
    // Si action.type === "ADD_TODO"
    // alors exécute ce code
    return [...state, nouvelleTache];

  case "DELETE_TODO":
    // Si action.type === "DELETE_TODO"
    // alors exécute ce code
    return state.filter(...);

  default:
    // Si aucun des "case" au-dessus ne correspond
    // on ne fait rien (on renvoie le state tel qu’il est)
    return state;
}





export const todoReducer=(state,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return[...state,{id:Date.now(),text:action.payload,done:false}];
        
        case"DELETE_TODO":
        return state.filter((t)=>t.id!==action.payload);

        case "TOGGLE_TODO":
        return state.map((t)=> t.id===action.payload ?{...t,done:!t.done}:t);
    

        case"EDIT_TODO":
        return state.map((t)=>t.id===action.payload.id ?{...t,text:action.payload.text}:t);
        
        default:
        return state;
    
    default:
        return state 
        
}