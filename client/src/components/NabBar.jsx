import { Link } from "react-router-dom"

function NavBar(){
    return(
        <>
            <nav className="NavBar container flex">
                <Link className="logo" to="/">The Phone Cave</Link>
                <Link to="/">Homepage</Link>
            </nav>
        </>
    )
}
export default NavBar