import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Students from './pages/Students';
import Classes from './pages/Classes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </Router>
  );
}

export default App;
