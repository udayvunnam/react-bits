import React from 'react';
import { ControlledInputDemo } from './components/ControlledInput';
import { ModalDemo } from './components/Modal';
import { MultiCheckboxDemo } from './components/MultiCheckbox';
import { ImageFetchDemo } from './hooks/useFetch';
import { ClickInOrOutDemo } from './hooks/useClickInsideOrOutside';
import { ToastDemo, ToastProvider } from './components/Toast';
import './App.css';

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
    <ToastProvider>
      <div className='app'>
        <h1 className='header'>React Bits</h1>
        <ComponentBlocks>
          <MultiCheckboxDemo name='Multi Checkbox' />
          <ControlledInputDemo name='Controlled Input' />
          <ModalDemo name='Modal' />
          <ImageFetchDemo name='useFetch' />
          <ClickInOrOutDemo name="Click IN or OUT" />
          <ToastDemo name="Toast" />
        </ComponentBlocks>
      </div>
    </ToastProvider>
  );
};

export default App;
