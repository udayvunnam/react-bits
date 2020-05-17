import React from 'react';
import { MultiCheckbox } from './index';

export const MultiCheckboxDemo = () => {
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
  return <MultiCheckbox list={checkboxes} onChange={(data) => console.log(data)} />;
};
