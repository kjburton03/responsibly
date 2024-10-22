import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return <ul className="navbar">
        <li className="navbar-item">
            <Link to='/todos'>Todo</Link>
            <Link to='/shops'>Shop</Link>
        </li>
    </ul>
}