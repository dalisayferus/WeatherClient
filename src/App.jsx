import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/isAnon";
import { AuthProviderWrapper } from "./context/auth.context";
import AlertsPage from "./pages/AlertsPage";

// 🎨 Importing styles
import "./styles/alertPage.css";
import "./styles/App.css";
import "./styles/homePage.css";
import "./styles/loginPage.css";
import "./styles/signupPage.css";

function App() {
  return (
    <div className="App">
      <AuthProviderWrapper>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/signup"
            element={
              <IsAnon>
                {" "}
                <SignupPage />{" "}
              </IsAnon>
            }
          />
          <Route
            path="/login"
            element={
              <IsAnon>
                {" "}
                <LoginPage />{" "}
              </IsAnon>
            }
          />
          <Route path="/alertspage" element={<AlertsPage />} />
        </Routes>
      </AuthProviderWrapper>
    </div>
  );
}

export default App;
