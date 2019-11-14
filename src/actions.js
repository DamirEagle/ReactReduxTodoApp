export const addTaskAC = task => {
  return {
    type: "ADD_TASK",
    payload: task
  };
};
export const deleteTaskAC = taskId => {
  return {
    type: "DELETE_TASK",
    payload: taskId
  };
};
