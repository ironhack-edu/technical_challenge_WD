import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/phones"> Phones</NavLink>
      </div>
    </>
  );
}
