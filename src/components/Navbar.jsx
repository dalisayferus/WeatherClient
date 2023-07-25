import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser();
  };
  console.log("user", user);
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </Link>

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}

      {isLoggedIn && user.isAdmin && (
        <Link to="/alertspage">
          <button>Alerts</button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
