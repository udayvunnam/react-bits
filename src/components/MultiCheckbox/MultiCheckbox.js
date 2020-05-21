import React, { useState } from 'react';
import './index.css';

export const MultiCheckbox = ({ list = [], onChange, onChangeItem }) => {
  const [data, setData] = useState(list);

  const toggle = (index) => {
    data[index].checked = !data[index].checked;
    setData([...data]);
    if (onChange) { onChange(data) };
    if (onChangeItem) { onChangeItem(`${data[index].label}: ${data[index].checked}`); }
  };

  return (
    <ol>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <input
              type='checkbox'
              id={`checkbox${index}`}
              checked={item.checked}
              onChange={() => {
                toggle(index);
              }}
            ></input>
            <label htmlFor={`checkbox${index}`}>{item.label}</label>
          </li>
        );
      })}
    </ol>
  );
};
