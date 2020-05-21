import React from 'react';
import { MultiCheckbox } from './index';
import { useToastActionsContext } from '../toast/ToastContext';

export const MultiCheckboxDemo = () => {
  const toast = useToastActionsContext();

  const checkboxes = [
    {
      label: 'Angular',
      checked: true,
    },
    {
      label: 'React',
      checked: true,
    },
    {
      label: 'Vue',
      checked: false,
    },
  ];
  return <MultiCheckbox list={checkboxes} onChangeItem={(data) => toast({ title: 'MultiCheckboxDemo', message: data })} />;
};
