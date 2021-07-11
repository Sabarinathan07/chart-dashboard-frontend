import React, { useContext}from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Button.css';
// import { Link } from 'react-router-dom';

const LogoutButton = () => {


  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function logout() {
    // await axios.get("http://localhost:5000/auth/logout");
    
    await axios.get("https://dashboard--backend.herokuapp.com/auth/login");
      await getLoggedIn();
      history.push("/");
  }
  return (
   
    <button className='btn' onClick={logout}>Logout</button>

   );
}
 
export default LogoutButton;
