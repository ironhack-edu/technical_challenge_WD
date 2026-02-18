import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Phone Cave Logo" className="logo-img" />
      <h1 className="logo-title">Phone Cave</h1>
    </div>
  );
};
export default Navbar;
