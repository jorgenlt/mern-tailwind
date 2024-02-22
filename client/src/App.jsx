import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const App = () => {
  const isAuth = false;

  return (
    <Router>
      <>
        {/* <Nav /> */}
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/" />}
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
