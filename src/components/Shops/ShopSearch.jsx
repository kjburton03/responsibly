import { useState } from "react"

export const ShopSearch = ({setSearchTerm, setShowNecessityOnly}) => {
    return <>
        <div className="filter-bar">
            <button className="filter-btn btn-primary" onClick={() =>{setShowNecessityOnly(true)}}> Need </button>
            <button className="filter-btn btn-primary" onClick={() =>{setShowNecessityOnly(false)}}> All</button>
            <input
                onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
                type="text"
                placeholder="hola chica"
                className="ticket-search" />
        </div>
    </>
}