import React from 'react';
import './App.css';
import { MultiSelect } from './multi-select';
import { ControlledInput } from './controlled-input';

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
          ad
        />
        <ControlledInput
          value='uday'
          callback={(changedValue) => {
            console.log(changedValue);
          }}
        />
      </section>
    </div>
  );
}

export default App;
