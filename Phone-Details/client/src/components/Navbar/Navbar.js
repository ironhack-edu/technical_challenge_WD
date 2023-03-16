import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar({phoneList}) {

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      {phoneList.map((phone)=> {
        return     <Link to={`/phones/aboutPhones/${phone.id}`}>
        <button>{phone.name}</button>
      </Link>    
          
        
      })}
    
    </nav>
  );
}

export default Navbar;