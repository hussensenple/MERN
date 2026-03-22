import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      setTimeout(() => {
        const mockGeomaticsData = [
          { id: 1, title: 'Leica TS16 Total Station', price: 18500 },
          { id: 2, title: 'Trimble R12i GNSS System', price: 22000 },
          { id: 3, title: 'DJI Mavic 3 Enterprise RTK', price: 5800 },
          { id: 4, title: 'ArcGIS Pro Advanced License', price: 3800 },
          { id: 5, title: 'Faro Focus Premium Laser Scanner', price: 35000 },
          { id: 6, title: 'Handheld GPS Garmin GPSMAP 66sr', price: 500 }
        ];
        setProducts(mockGeomaticsData);
        setLoading(false);
      }, 800); 
    };
    fetchProducts();
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading Equipment...</h2>;

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#2c3e50' }}>Geomatics & Spatial Equipment Shop</h1>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;