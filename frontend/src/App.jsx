// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element="" />
          <Route path="/about" element="" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
