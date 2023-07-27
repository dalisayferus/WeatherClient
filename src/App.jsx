import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
