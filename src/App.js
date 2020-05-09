import React from 'react';
import './App.css';
import { MultiSelect } from './multi-select';

function App() {
  return (
    <div className='App'>
      <h1>My Components</h1>
      <section className='blocks'>
        <MultiSelect
          list={[
            { label: 'mytr', checked: true },
            { label: 'yoiur', checked: false },
          ]}
          onChange={(val) => {
            console.log(JSON.stringify(val));
          }}
        ></MultiSelect>
      </section>
    </div>
  );
}

export default App;
