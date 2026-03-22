import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#2c3e50', color: 'white', alignItems: 'center' }}>
      <h2 style={{ margin: 0 }}>GeoCart</h2>
      <div style={{ display: 'flex', gap: '20px', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
        <Link to="/cart" style={{ color: '#f1c40f', textDecoration: 'none' }}>
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;