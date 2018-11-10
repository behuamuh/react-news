import React from 'react';
import validateForm from '../decorators/validateForm';

function FormComment({ value, handleChange, className }) {
  return (
    <div>
      <p>Your comment</p>
      <textarea value={value} onChange={handleChange} className={className} />
    </div>
  );
}

export default validateForm(FormComment);
