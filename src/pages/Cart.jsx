import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#2c3e50' }}>Your GeoCart is empty 🛒</h2>
        <p style={{ color: '#7f8c8d', fontSize: '1.2rem' }}>You have not added any surveying or GIS equipment yet.</p>
        <Link to="/shop" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 25px', background: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '1.1rem' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #ecf0f1', paddingBottom: '10px' }}>Shopping Cart</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e0e0e0', padding: '20px', borderRadius: '8px', background: '#fff' }}>
            
            <div style={{ flex: '2' }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>{item.title}</h4>
              <p style={{ margin: '0', color: '#7f8c8d' }}>Unit Price: ${item.price.toLocaleString()}</p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '1', justifyContent: 'center' }}>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                style={{ padding: '5px 12px', cursor: 'pointer', fontSize: '1.2rem' }}
              >-</button>
              <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={{ padding: '5px 12px', cursor: 'pointer', fontSize: '1.2rem' }}
              >+</button>
            </div>

            <div style={{ flex: '1', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', color: '#27ae60' }}>
              ${(item.price * item.quantity).toLocaleString()}
            </div>
            
            <button 
              onClick={() => removeFromCart(item.id)} 
              style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '40px', padding: '30px', background: '#f8f9fa', borderRadius: '8px', textAlign: 'right', border: '1px solid #e0e0e0' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '1.5rem', color: '#2c3e50' }}>Total: ${totalPrice.toLocaleString()}</h3>
        <button style={{ background: '#27ae60', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;