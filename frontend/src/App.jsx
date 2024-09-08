import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
