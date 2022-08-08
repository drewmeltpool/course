import React, {useRef, useState} from 'react';

const UncontrolledForm = ({secret}) => {
  const [errors, setErrors] = useState({});
  const loginInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!loginInput.current.value.length) {
      newErrors.login = "invalid login"
    }

    if (passwordInput.current.value.length <= 5) {
      newErrors.password = "invalid password"
    }

    if (passwordInput.current.value !== '' && passwordInput.current.value !== confirmPasswordInput.current.value) {
      newErrors.confirmPassword = "passwords are not equal"
    }

    setErrors(newErrors);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form__header'>Uncontrolled form</h2>

      <label>
        Login
        <input ref={loginInput} type='text' name='login' placeholder='Login' defaultValue='gogi'/>
        {errors.login && <span style={{color: 'red'}}>{errors.login}</span>}
      </label>

      <label>
        Password
        <input ref={passwordInput} type='password' name='password' placeholder='Password'/>
        {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
      </label>

      <label>
        Confirm Password
        <input ref={confirmPasswordInput} type='password' name='confirmPassword' placeholder='Confirm password'/>
        {errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword}</span>}
      </label>

      <button type='submit'>Submit form</button>
    </form>

  );
};

export default UncontrolledForm;