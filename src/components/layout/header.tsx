import { Link } from "react-router-dom";
import "./header.css"

function Header() {
return (
    <nav className="header">
        <ul className="list">

            <li className="item">
            <Link to="/">Home</Link>
            </li>

            <li className="item">
            <Link to="/projects" >Projects</Link>
            </li>

            <li className="item">
            <Link to="/contact" >Contact</Link>
            </li>
            
        </ul>
    </nav>
    )
}

export default Header;