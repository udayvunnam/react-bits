import React from 'react';
import { useToastActionsContext } from './ToastContext';

export const ToastDemo = () => {
  const toast = useToastActionsContext();

  return (
    <button onClick={() => { toast({ title: 'Custom Uday', message: 'yoyo', type: 'error' }) }}>Notify</button>
  );
};
