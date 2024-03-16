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

const App = () => {
  const isAuth = Boolean(useSelector((state) => state.auth.token));

  return (
    <Router>
      <>
        {/* <Nav /> */}
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
      </>
    </Router>
  );
};

export default App;

{
  /* <Route path="/" element={isAuth ? <Home /> : <Login />} /> */
}
