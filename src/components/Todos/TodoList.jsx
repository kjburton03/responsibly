import { useEffect, useState } from "react"
import "./Todos.css"
import { getAllToDoItems } from "../../services/TodoService"

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

            <article className="tickets">
                {filteredTodos.map(todo => {
                    return (
                        <section className="ticket" key={todo.id}>
                            <header className="ticket-info">
                            {todo.name}
                            </header>
                            <div> {todo.description} </div>
                            <footer>
                                <div> ${todo.price} </div>
                                <div> item #{todo.id}</div>
                                <div> Need to do </div>
                                <div> {todo.necessity ? "yes" : "no" }</div>

                            </footer>
                        </section>
                    )
                })}
            </article>
        </div>

}