import ItemCard from './components/ItemCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './components/Cart';
import Items from './components/Items';
import Navbar from './components/Navbar'
import Carticons from './components/Carticons';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="items" element={<Items />} />
        <Route path="item" element={<ItemCard />} />
      </Routes>
    </Router>
  );
}

export default App;
