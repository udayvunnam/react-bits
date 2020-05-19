import React from 'react';
import './App.css';
import { ControlledInputDemo } from './controlled-input/demo';
import { ModalDemo } from './modal/demo';
import { MultiCheckboxDemo } from './multi-checkbox/demo';
import { ImageFetchDemo } from './useFetch/demo';
import { ClickInOrOutDemo } from './useClickInsideOrOutside/demo'
const ComponentBlocks = ({ children }) => {
  return (
    <section className='component-blocks'>
      {React.Children.map(children, (child) => {
        return (
          <div className="component-block">
            <h2 className='component-title'>{child.props.name}</h2>
            <div className="component-view">{child}</div>
          </div>
        );
      })}
    </section>
  );
};

const App = () => {
  return (
    <div className='app'>
      <h1 className='header'>React Bits</h1>
      <ComponentBlocks>
        <MultiCheckboxDemo name='Multi Checkbox' />
        <ControlledInputDemo name='Controlled Input' />
        <ModalDemo name='Modal' />
        <ImageFetchDemo name='useFetch' />
        <ClickInOrOutDemo name="Click IN or OUT" />
      </ComponentBlocks>
    </div>
  );
};

export default App;
