import React from 'react';
import './Login.scss'

const Login = () => {
  return (
    <main className='login-wrap'>
      <form className='login__form'>
        <input type="text"/>
        <input type="password"/>
        <input type="submit" value='log in'/>
      </form>
    </main>
  );
};

export default Login;