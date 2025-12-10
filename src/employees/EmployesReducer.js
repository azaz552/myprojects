// 🎯 Reducer : définit comment l'état change selon le type d'action

export const employesReducer = (state, action) => {
  switch (action.type) {

    case "add":
      return { employes: [...state.employes, action.payload] };
      // ➕ Ajouter un employé

    case "remove":
      return { employes: state.employes.filter(emp => emp.id !== action.payload) };
      // ❌ Supprimer un employé

    case "edit":
      return {
        employes: state.employes.map(emp =>
          emp.id === action.payload.id ? { ...emp, ...action.payload } : emp
        ),
      };
      // ✏️ Modifier les infos d’un employé

    case "clear":
      return { employes: [] };
      // 🧹 Supprimer tous les employés

    default:
      return state;
  }
};
