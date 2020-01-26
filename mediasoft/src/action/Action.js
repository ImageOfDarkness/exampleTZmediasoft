export const addTaskAction = (task) => {
    return {
        type: "TASK_ADD",
        payload: task
    }
};

export const deleteTaskAction = (id) => {
    return {
        type: "TASK_DELETE",
        payload: id
    }
};