import React, { useState, useEffect } from 'react';
import './index.css';

export const ControlledInput = ({ value, callback }) => {
  const [data, setData] = useState(value);
  useEffect(() => {
    callback(data);
  }, [callback, data]);

  return (
    <form>
      <input
        type='text'
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      ></input>
    </form>
  );
};
