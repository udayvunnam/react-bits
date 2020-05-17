import React from 'react';
import './App.css';
import { ControlledInputDemo } from './controlled-input/demo';
import { ModalDemo } from './modal/demo';
import { MultiCheckboxDemo } from './multi-checkbox/demo';

function App() {
  return (
    <div className='app'>
      <h1 className='header'>React Bits</h1>
      <section className='component-blocks'>
        <ControlledInputDemo name='Controlled Input' />
        <ModalDemo name='Modal' />
        <MultiCheckboxDemo name='Multi Checkbox' />
      </section>
    </div>
  );
}

export default App;
