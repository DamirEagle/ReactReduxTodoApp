const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";

let initialState = {
  Todos: [
    { taskId: 1, todo: "Eat" },
    { taskId: 2, todo: "Sleep" },
    { taskId: 3, todo: "Run" },
    { taskId: 4, todo: "Eat again" }
  ]
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      let newTodo = {
        taskId: Math.random(),
        todo: action.payload
      };
      return { ...state, Todos: [...state.Todos, newTodo] };
    }
    case DELETE_TASK:
      let newTodos = state.Todos.filter((item, index) => {
        if (item.taskId !== action.payload) return item;
      });
      return { ...state, Todos: newTodos };
    default:
      return state;
  }
};

export default taskReducer;
