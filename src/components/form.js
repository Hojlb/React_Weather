import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.weather}>
      <input type='text' name='city' placeholder='Your sity'/>
      <button >button</button>
    </form>
  );
}

export default Form;
