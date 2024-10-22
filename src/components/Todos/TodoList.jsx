import { useEffect, useState } from "react"
import "./Todos.css"
import { getAllToDoItems } from "../../services/TodoService"
import { TodoSearch } from "./TodoSearch"
import { Todo } from "./Todo"

export const TodoList = () => {
    const [allTodos, setAllTodos] = useState([])
    const [ showNecessityOnly, setShowNecessityOnly ] = useState([false])
    const [ filteredTodos, setFilteredTodos] = useState([])
    const [ searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllToDoItems().then(todosArray => {
            setAllTodos(todosArray)
            console.log("todos set!")
        })
    }, [])

    useEffect(() => {
        if (showNecessityOnly) {
            const necessityTodos = allTodos.filter(
                (todos) => todos.necessity === true
            )
            setFilteredTodos(necessityTodos)
        } else {
            setFilteredTodos(allTodos)
        }
    }, [showNecessityOnly, allTodos])

    useEffect(() => {
        const foundTodos = allTodos.filter((todo) => 
            todo.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTodos(foundTodos)
    }, [searchTerm, allTodos])

        return <div className="tickets-container">
            <h2> Todo List </h2>
                <TodoSearch setSearchTerm={setSearchTerm} setShowNecessityOnly={setShowNecessityOnly}/>

            <article className="tickets">
                {filteredTodos.map((todoObj) => {
                    return <Todo todo={todoObj} key={todoObj.id} />
                    
                })}
            </article>
        </div>

}