import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleLastname = (e) => setLastname(e.target.value);
  const handleAdminToggle = (e) => setIsAdmin(e.target.checked);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, firstName, lastName, isAdmin };
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  console.log(isAdmin);
  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Firstname: </label>
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={handleFirstname}
        />

        <label>Lastname: </label>
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={handleLastname}
        />

        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="admin"
            checked={isAdmin}
            onChange={handleAdminToggle}
          />
          Register as Admin
        </label>

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
