import React, { useState } from 'react';
import axios from 'axios';

const Sales = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      // Sell product (reduce quantity)
      const response = await axios.patch(`http://localhost:3001/product/sellProduct`, {
        quantity,
        productId
      });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert('Network error: Unable to process request');
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: "black"}}>
      <div style={{ backgroundColor: '#1a202c', padding: '50px 20px', borderRadius: '30px', width: '400px', maxWidth: '100%', boxSizing: 'border-box' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: 'white', textAlign: 'center' }}>Sales Page</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '15px', width: '100%', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="productId" style={{ fontWeight: 'bold', marginRight: '10px', color: 'white', flex: '1' }}>Product ID:</label>
            <input
              type="text"
              id="productId"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              required
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '5px', flex: '2' }}
            />
          </div>
          <div style={{ marginBottom: '15px', width: '100%', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="quantity" style={{ fontWeight: 'bold', marginRight: '10px', color: 'white', flex: '1' }}>Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '5px', flex: '2' }}
            />
          </div>
          <button 
            type="submit" 
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              fontSize: '16px', 
              width: '100%', 
              maxWidth: '200px', 
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            Submit
          </button>
        </form>
        {message && <p style={{ marginTop: '10px', color: 'white', textAlign: 'center' }}>{message}</p>}
        {error && <p style={{ marginTop: '10px', color: 'red', textAlign: 'center' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Sales;
