import React, { useRef } from 'react';
import { useClick } from './useClick';
import './index.css';
import { useToastActionsContext } from '../../components/Toast';

export const ClickInOrOutDemo = () => {
  const clickRef = useRef();
  const outerRef = useRef(); // can be document object as well
  const toast = useToastActionsContext();

  const onClickInside = () => {
    toast({ title: 'ClickInOrOutDemo', message: 'clicked inside', type: 'success' })
  };
  const onClickOutside = () => {
    toast({ title: 'ClickInOrOutDemo', message: 'clicked outside', type: 'info' })
  };
  useClick({ ref: clickRef, parent: outerRef, onClickInside, onClickOutside });

  return (
    <div ref={outerRef} className="outer-area">
      <p>OUTSIDE</p>
      <p ref={clickRef} className="click-area">INSIDE</p>
      <p>OUTSIDE</p>

    </div>
  );
};
