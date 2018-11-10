import React from 'react';
import validateForm from '../decorators/validateForm';

function FormAuthor({ value, handleChange, className }) {
  return (
    <div>
      <p>Your name:</p>
      <input value={value} onChange={handleChange} className={className} />
    </div>
  );
}

export default validateForm(FormAuthor);
