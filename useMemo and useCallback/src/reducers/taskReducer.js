export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE":
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case "REMOVE":
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};
