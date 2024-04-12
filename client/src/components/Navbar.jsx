import { Link } from "react-router-dom";
import { useContext } from "react";

function Navbar() {

    return(
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

            {/* <Link to="/phones">
                <button>Phones</button>
            </Link> */}
        </nav>
    )
}

export default Navbar; 