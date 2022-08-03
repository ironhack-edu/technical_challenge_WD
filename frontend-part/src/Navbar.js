import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <ul>

      
        <div className="container">
          <a className="navbar-brand" href="/phones">PhoneList</a>
        </div>

    
      </ul>
      
    </nav>
  );
}

export default Navbar;