export const TodoSearch = () => {

    return <>
        <div className="filter-bar">
        
            <button className="filter-btn btn-primary" onClick={() =>{setShowNecessityOnly(true)}}> Need to do </button>
            <button className="filter-btn btn-info" onClick={() => {setShowNecessityOnly(false)}}> All Items</button>
            <input
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
                type="text"
                placeholder="i'm sure you forgot"
                className="ticket-search" />
        </div>
    </>
}