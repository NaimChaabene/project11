import React from  'react';
import './app.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

 

function App() {
  return (
    <form className="login-form">
    <h1 className="font-weight-bold text-center"> Monsiteweb.com </h1>
    <h2 className="text-center">Welcome</h2>
    <FormGroup className="d-flex justify-content-between">
      <label>Email </label>
      <input type="email" placeholder="Email"></input>
    </FormGroup>
    <FormGroup className="d-flex justify-content-between">
      <label>Password </label>
      <input type="password" placeholder="Password "></input>
    </FormGroup>
    <Button className="btn-lg btn-dark btn-block">Log in</Button> 
        <a href="/sign-up">Forgot Password?</a>

    </form>
  );
  }

export default App;
