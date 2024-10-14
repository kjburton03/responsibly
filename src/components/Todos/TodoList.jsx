import { useEffect, useState } from "react"
import "./Todos.css"
import { getAllToDoItems } from "../../services/DoList"

export const TodoList = () => {
    const [allTodos, setAllTodos] = useState([])
    const [ showNecessityOnly, setShowNecessityOnly ] = useState([false])
    const [ filteredTodos, setFilteredTodos] = useState([])

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

        return <div className="tickets-container">
            <h2> Todo List </h2>
            <div>
                <button className="filter-btn btn-primary" onClick={() =>{setShowNecessityOnly(true)}}> Need to do </button>
                <button className="filter-btn btn-info" onClick={() => {setShowNecessityOnly(false)}}> All Items</button>
            </div>
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