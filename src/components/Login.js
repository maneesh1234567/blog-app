import React, {useState} from 'react';
import './Login.css'; // Assuming you have a CSS file for styling   
import { data, Form } from 'react-router-dom';
import { Input } from '@mui/material';
const Login= () => {
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const {username, password} = data; // Destructure email and password from state
  return (  
    <div className="login-container">
        <Form>
            <Input type="email," name='Email' value={username}/><br/>
            <Input type="password" name='Password' value={password}/><br/>
            <Input type="submit" name='submit'/>
            <Input type="reset" name='Reset' />
        </Form>
      </div>
  );
}
export default Login;