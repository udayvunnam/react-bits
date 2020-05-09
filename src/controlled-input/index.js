import React from 'react';
import './index.css';

export function ControlledInput({ disabled, value, onChange, callback }) {
  const [data, setData] = React.useState(value);
  React.useEffect(() => {
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
}
