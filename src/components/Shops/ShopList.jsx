import { useEffect, useState } from "react";
import { getAllShopItems } from "../../services/ShopService";
import "./Shops.css"

export const ShopList = () => {
const [allShops, setAllShops] = useState([])
const [showNecessityOnly, setShowNecessityOnly] = useState(false)
const [filteredShops, setFilteredShops] = useState([])

useEffect(() => {
    getAllShopItems().then(shopsArray => {
        setAllShops(shopsArray)
        console.log("shops set!")
    })
}, [])

    useEffect(() => {
    if (showNecessityOnly) {
        const necessityShops = allShops.filter(
            (shops) => shops.necessity === true
        )
        setFilteredShops(necessityShops)
    } else {
        setFilteredShops(allShops)
    }
    }, [showNecessityOnly, allShops])

    return <div className="tickets-container">
        <h2> Shopping List </h2>
        <div>
            <button className="filter-btn btn-primary" onClick={() =>{setShowNecessityOnly (true)} }> It's a need ma'am</button>
            <button className="filter-btn btn-info" onClick={() => {setShowNecessityOnly (false)} }> All Items </button>
        </div>
        <article className="tickets">
            {filteredShops.map(shop => {
                return (
                    <section className="ticket" key={shop.id}>
                        <header className="ticket-info" > {shop.name} </header>
                        <div> {shop.description} </div>
                        <footer>
                            <div> ${shop.price} </div>
                            <div> Item  #{shop.id}  </div>
                            <div> Necessity? </div>
                            <div> {shop.necessity ? "definitely" : "no" } </div>
                        </footer>
                    </section>
                )
            })}
            
        </article>
    </div>
} 