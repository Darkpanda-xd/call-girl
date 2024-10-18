import { Home } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Guwahati from './Pages/Guwahati';
// import Home from './pages/Home';
// import Guwahati from './pages/Guwahati';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/guwahati">Guwahati</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guwahati" element={<Guwahati />} />
      </Routes>
    </Router>
  );
}

export default App;