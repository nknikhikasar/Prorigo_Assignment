import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to="/">Main</NavLink></li>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/add">Add</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
