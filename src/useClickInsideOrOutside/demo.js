import React, { useRef, useContext } from 'react';
import { useClick } from './index';
import './demo.css';
import { ToastContext } from '../toast';

export const ClickInOrOutDemo = () => {
  const clickRef = useRef();
  const outerRef = useRef(); // can be document object as well
  const { notify } = useContext(ToastContext);

  const onClickInside = () => {
    notify({ title: 'ClickInOrOutDemo', message: 'clicked inside', type: 'success' })
  };
  const onClickOutside = () => {
    notify({ title: 'ClickInOrOutDemo', message: 'clicked outside', type: 'info' })
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
