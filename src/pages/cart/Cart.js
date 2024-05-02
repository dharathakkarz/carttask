

import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity  } from '../../redux/action/ProductAction';
import { useNavigate } from 'react-router-dom'; 
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { toast } from 'react-toastify';
import {message,toaststyle} from '../../constant/message'

const Cart = () => {
  const cart = useSelector(state => state.cart || []);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 



  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    toast.warning(message.REMOVE, {
      ...toaststyle,
    
    });
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const handleBuyNow = (productId) => {
    dispatch(removeFromCart(productId)); 

    navigate('/buy-now');
  };

  return (
    <div> 
      <h1><center>Your Cart</center></h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cart.map(item => (
          <div key={item.id} className="cart-item" style={{ margin: '10px', width: '300px', border: '5px solid #333', borderRadius: '5px', padding: '10px', position: 'relative' }}>
            <h3>{item.title}</h3>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <AddIcon onClick={() => handleIncrementQuantity(item.id)} /> 
            <RemoveIcon onClick={()=> handleDecrementQuantity(item.id)} />
            <p><strong>Total Amount:</strong> ${item.price * item.quantity}</p>
            <Button onClick={() => handleBuyNow(item.id)} variant="outlined" color="secondary" style={{ marginTop: '10px', width: '100%', border: '3px solid' }}>
             Buy Now
            </Button>
            <Button onClick={() => handleRemoveFromCart(item.id)} variant="outlined" color="secondary" style={{ marginTop: '10px', width: '100%',border: '3px solid' }}>
              Remove from Cart
            </Button>
           
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Cart;  // buy now updates


