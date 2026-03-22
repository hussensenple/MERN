import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', width: '280px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginTop: 0, color: '#2c3e50' }}>{product.title}</h3>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#27ae60' }}>${product.price.toLocaleString()}</p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0' }}>
        <button 
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          style={{ padding: '5px 15px', fontSize: '1rem', cursor: 'pointer' }}
        >-</button>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          style={{ width: '60px', textAlign: 'center', padding: '5px', fontSize: '1rem' }}
        />
        <button 
          onClick={() => setQuantity(q => q + 1)}
          style={{ padding: '5px 15px', fontSize: '1rem', cursor: 'pointer' }}
        >+</button>
      </div>

      <button 
        onClick={() => addToCart(product, quantity)}
        style={{ width: '100%', padding: '10px', background: '#2980b9', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;