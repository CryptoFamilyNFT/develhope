/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Welcome({ name }) {
  return (
    <p className='welcome'>
      {name ? `Hello, ${name}!` : 'Hello!'}
    </p>
  );
}

