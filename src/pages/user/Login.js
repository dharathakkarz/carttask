

import React, { useContext, useState , useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/AuthUtils';
import { toast } from 'react-toastify';
import {message,toaststyle} from '../../constant/message'


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);
  const navigate= useNavigate();
  const [loginError, setLoginError] = useState(false); 

  const users = [
    {
      user_id: 1,
      first_name: "andrew",
      last_name: "user1",
      email: "andrew@test.com",
      password: "andrew@123"
    },
    {
      user_id: 2,
      first_name: "mike",
      last_name: "user2",
      email: "mike@test.com",
      password: "mike@123"
    },
    {
      user_id: 3,
      first_name: "jeet",
      last_name: "user3",
      email: "jeet@test.com",
      password: "jeet@123"
    }
  ];



  const onSubmit = (data) => {
    const user = users.find(user => user.email === data.email && user.password === data.password);
    if (user) {
      console.log("Login successful", user);
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(user));
  
      login(user);
      toast.success(message.LOGIN, {
        ...toaststyle,
        onClose: () => navigate('/product') // Redirect after toast is closed
      });
      // navigate("/product");
    } else {
      console.log("Invalid email or password");
      toast.error(message.ERROR, {
        ...toaststyle,
    
      });
      setLoginError(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/product'); // open product page if already logged in
    }
  }, [navigate]);


  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        id="email"
        label="Email"
        type="email"
        {...register('email', { required: true })}
        fullWidth
        margin="normal"
        error={!!errors.email}
        helperText={errors.email && "This field is required"}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        {...register('password', { required: true })}
        fullWidth
        margin="normal"
        error={!!errors.password || loginError} // Set error state based on loginError
        helperText={(errors.password && "This field is required") || (loginError && "Invalid email or password")}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  );
};

export default Login;

