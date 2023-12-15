import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css"

function Footer() {
  const [numVisits, setNumVisits] = useState(() => {
    const storedVisits = localStorage.getItem("numVisits");
    return storedVisits ? parseInt(storedVisits) : 0;
  });

  useEffect(() => {
    if (window.location.pathname === "/") {
      setNumVisits((visits) => {
        localStorage.setItem("numVisits", visits.toString());
        return visits + 1;
      });
    }

  }, []);

  return (
    <div className="footer">

        <ul className="footer_list">

        <li className="item">
        <Link to="/contact" >Contact</Link>
        </li>

        <li className="item">
        <Link to="https://www.linkedin.com/in/daniel-gutierres-9157a7144/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        </li>

        </ul>

        <p className="item">
        This website has been visited {numVisits} times.
        </p>

    </div>
  );
}

export default Footer;