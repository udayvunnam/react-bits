import React, { useState } from 'react';
import './App.css';
import { MultiSelect } from './multi-select';
import { ControlledInput } from './controlled-input';
import { Modal } from './modal/index';

function App() {
  const [isModal, setIsModal] = useState(false);

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
        <button
          onClick={() => {
            setIsModal(true);
          }}
        >
          Open Modal
        </button>
        <Modal
          title='uday'
          content='software Engineer'
          isVisible={isModal}
          onClose={() => {
            setIsModal(false);
          }}
        />
      </section>
    </div>
  );
}

export default App;
