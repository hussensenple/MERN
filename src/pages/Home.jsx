import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '3rem' }}>Welcome to GeoCart</h1>
      <p style={{ color: '#7f8c8d', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>
        Your premier destination for professional Surveying, GIS, and Remote Sensing equipment.
      </p>
      <Link to="/shop" style={{ background: '#27ae60', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '5px', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Explore Our Equipment
      </Link>
    </div>
  );
}

export default Home;