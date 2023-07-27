import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home</Link>
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Signup</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
