import React, { useRef } from 'react';
import { useClick } from './index';
import './demo.css';

export const ClickInOrOutDemo = () => {
  const clickRef = useRef();
  const outerRef = useRef(); // can be document object as well

  const onClickInside = () => {
    alert('clicked inside')
  };
  const onClickOutside = () => {
    alert('clicked outside')
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
