import React, {useEffect, useState} from 'react';

const ControlledForm = () => {
  const [values, setValues] = useState({
    email: 'admin@test.com',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (touched.email && !values.email.length) {
      newErrors.email = "invalid login"
    }

    if (touched.password && values.password.length <= 5) {
      newErrors.password = "invalid password"
    }

    if (touched.confirmPassword && values.password !== values.confirmPassword) {
      newErrors.confirmPassword = "passwords are not equal"
    }

    return newErrors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => setIsSubmitting(false), 1000)
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleBlur = async (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  useEffect(() => {
    setErrors(validateForm())
  }, [values, touched]);

  return (
    <form className='login' onSubmit={handleSubmit} onBlur={handleBlur} onChange={handleChange} noValidate>
      <h3>Controlled Form</h3>
      <label>
        <p>Email</p>
        <input
          type='email'
          placeholder='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {
          touched.email &&
          errors?.email
          && <span className='error' style={{color:'red'}}>{errors.email}</span>}
      </label>
      <label>
        <p>Password</p>
        <input
          type='password'
          placeholder='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {
          touched.password &&
          errors?.password
          && <span className='error' style={{color:'red'}}>{errors.password}</span>}
      </label>
      <label>
        <p>Confirm Password</p>
        <input
          type='password'
          placeholder='Confirm password'
          name='confirmPassword'
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {
          touched.confirmPassword &&
          errors?.confirmPassword
          && <span className='error' style={{color:'red'}}>{errors.confirmPassword}</span>}
      </label>
      <button type='submit' disabled={isSubmitting}>Submit</button>
    </form>
  )
}

export default ControlledForm