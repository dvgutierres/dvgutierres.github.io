import { Link } from "react-router-dom";

function Home() {
return (
    <div>
    <Link to="/" >Home</Link>
    <Link to="/projects" >Projects</Link>
    <Link to="/contact" >Contact</Link>
    </div>
    )
}

export default Home;