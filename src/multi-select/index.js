import React from 'react';
import './index.css';

export function MultiSelect({ list = [], onChange }) {
  const [data, setData] = React.useState(list);

  const toggle = (index) => {
    data[index].checked = !data[index].checked;
    setData([...data]);
    onChange(data);
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
}
