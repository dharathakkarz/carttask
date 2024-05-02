

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, addToCart } from '../redux/action/ProductAction';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import {message,toaststyle} from '../constant/message'

function Home() {
  const products = useSelector(state => state.products || []);
  const dispatch = useDispatch();
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities(prevState => ({
      ...prevState,
      [productId]: quantity
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = selectedQuantities[product.id] || 1; 
    dispatch(addToCart(product, quantity));
    toast.success(message.ADD, {
      ...toaststyle,
      onClose: () => navigate('/cart') 
    });
    // navigate('/cart');
  };


  return (
    <>
      <h1><center>Products</center></h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
        <div key={product.id} className="product-card" style={{ margin: '10px', width: '300px', border: '4px solid #333', borderRadius: '5px', padding: '10px' }}>

            <h3>{product.title}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <Select
              value={selectedQuantities[product.id] || ''}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              style={{ marginTop: '10px', width: '100%' }}
              variant="outlined"
              size="medium"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select Quantity
              </MenuItem>
              {[...Array(10).keys()].map(value => (
                <MenuItem key={value} value={value + 1}>{value + 1}</MenuItem>
              ))}
            </Select>
            <Button onClick={() => handleAddToCart(product)} variant="outlined" color="primary" style={{ marginTop: '10px', width: '100%' , border: '3px solid' }}>
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;  //without toast



