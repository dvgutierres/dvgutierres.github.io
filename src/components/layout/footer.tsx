import "./footer.css"
import { Link } from "react-router-dom";

function Footer(){
    return(
    <div className="footer">
        <ul className="list">

            <li className="item">
            <Link to="/contact" >Contact</Link>
            </li>

            <li className="item">
            <Link to="https://www.linkedin.com/in/daniel-gutierres-9157a7144/" >LinkedIn</Link>
            </li>
            </ul>
    </div>     
    )
}

export default Footer;