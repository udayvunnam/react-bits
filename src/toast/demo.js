import React, { useContext } from 'react';
import { ToastContext, ToastProvider } from './index';

export const Toast = () => {
  const { notify } = useContext(ToastContext);

  return (
    <button onClick={() => { notify({ title: 'Custom Uday', message: 'yoyo', type: 'error' }) }}>Notify</button>
  );
};

export const ToastDemo = () => {
  return (
    <ToastProvider>
      <Toast />
    </ToastProvider>
  );
};
