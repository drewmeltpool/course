import React from 'react'
import { useField } from 'formik';

const CustomField = ({ label, name, ...rest }) => {
  const [field, meta, helpers] = useField(name);
  
  return (
    <>
      <div>
        <label>{label}
          <input {...field} {...rest} />
        </label>
      </div>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
};

export default CustomField
