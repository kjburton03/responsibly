export const getAllToDoItems = () => {
    return fetch(`http://localhost:8088/ToDoItems`).then((res) => res.json())
}