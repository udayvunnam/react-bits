import React, { useContext } from 'react';
import { MultiCheckbox } from './index';
import { ToastContext } from '../toast';

export const MultiCheckboxDemo = () => {
  const { notify } = useContext(ToastContext);

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
  return <MultiCheckbox list={checkboxes} onChange={(data) => notify({ title: 'MultiCheckboxDemo', message: JSON.stringify(data) })} />;
};
