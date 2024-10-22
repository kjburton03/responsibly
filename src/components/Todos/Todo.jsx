export const Todo = ({todo }) => {
    return (
        <section className="ticket" >
            <header className="ticket-info"> #{todo.id} </header>
            <div> {todo.description} </div>
            <div> hello </div>
            <div> {todo.name}</div>
        </section>
    )
}