import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

const Square = () => {
  const { color } = useContext(ColorContext);

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
      
      }}
    ></div>
  );
};

const Circle = (props) => {
  const { color } = useContext(ColorContext);

  return (
    <div
      style={{
        width: props.radius,
        height: props.radius,
        borderRadius: '50%',
        backgroundColor: color,
      }}
    ></div>
  );
};

export { Square, Circle };