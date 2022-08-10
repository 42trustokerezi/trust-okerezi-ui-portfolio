import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Menu from './components/Navigation/Menu'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
      </Routes>
    </div>
  );
}

export default App;
