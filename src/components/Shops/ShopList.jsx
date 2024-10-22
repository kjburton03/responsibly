import { useEffect, useState } from "react";
import { getAllShopItems } from "../../services/ShopService";
import { Shop } from "./Shop";
import { ShopSearch } from "./ShopSearch";
import "./Shops.css"

export const ShopList = () => {
const [allShops, setAllShops] = useState([])
const [showNecessityOnly, setShowNecessityOnly] = useState(false)
// const [showWantOnly, setWantOnly] = useState(true)
const [filteredShops, setFilteredShops] = useState([])
const [searchTerm, setSearchTerm] = useState("")

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

    // useEffect(() => {
    //     if (showWantOnly) {
    //         const wantShops = allShops.filter(
    //             (shops) => shops.necessity === false
    //         )
    //         setFilteredShops(wantShops)
    //     } else {
    //         setFilteredShops(allShops)
    //     }
    //     }, [showWantOnly, allShops])
    

    useEffect(() => {
        const foundShops = allShops.filter((shop) =>
            shop.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredShops(foundShops)
    }, [searchTerm,allShops])

    return <div className="tickets-container">
        <h2> Shopping List </h2>
            <ShopSearch setSearchTerm={setSearchTerm} setShowNecessityOnly={setShowNecessityOnly}/>

        <article className="tickets">
            {filteredShops.map((shopObj) => {
                return <Shop shop={shopObj} key={shopObj.id} />
                
            })}
            
        </article>
    </div>
} 