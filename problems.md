Walk through of all problems faced

1.   useEffect(() => {
    getAllToDoItems().then(todosArr => {
      setAllTodos(todosArr)
      console.log("tickets set!")
    })
  }) 
  runs through indefinitely . add []

2. under TodoList.jsx i could not get the name of the todo item to render under the map. checked data and capitalized only name , switched back to uncapitalized

3. ticketList.jsx only renders emergency tickets at first