import React from 'react';
import { ControlledInput } from './index';

export const ControlledInputDemo = () => {
  return (
    <ControlledInput
      value='uday'
      callback={(changedValue) => {
        console.log(changedValue);
      }}
    />
  );
};
