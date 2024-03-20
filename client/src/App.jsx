import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import StickyNavbar from "./components/StickyNavbar/StickyNavbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log("isAuth:", isAuth);

  return (
    <Router>
      {isAuth && <StickyNavbar />}

      <div className={isAuth ? "py-20 px-8 min-h-screen" : ""}>
        <Routes>
          <Route
            path="/"
            // element={isAuth ? <Navigate to="/home" /> : <Login />}
            element={
              isAuth ? <Navigate to="/home" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/home"
            // element={isAuth ? <Home /> : <Navigate to="/" />}
            element={isAuth ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            // element={<Login  />}
            element={isAuth ? <Navigate to="/home" /> : <Login />}
          />

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>

      {isAuth && <Footer />}
    </Router>
  );
};

export default App;

{
  /* <Route path="/" element={isAuth ? <Home /> : <Login />} /> */
}
