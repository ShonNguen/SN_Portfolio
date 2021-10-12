import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navigation">
            <h1>Shon Nguen</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact me</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;