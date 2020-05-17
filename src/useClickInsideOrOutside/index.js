import React, { useEffect } from 'react';

export const ClickInsideOrOutside = ({ children }) => {
  const useClick = (ref, cbInside, cbOutside) => {
    const handleClick = e => {
      if (ref.current) {
        if (ref.current.contains(e.target)) {
          cbInside()
        } else {
          cbOutside()
        }
      }
    };
    useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    });
  };

  const ClickBox = ({ onClickInside, onClickOutside }) => {
    const clickRef = React.useRef();
    useClick(clickRef, onClickInside, onClickOutside);
    return (
      <div
        className="click-box"
        ref={clickRef}
        style={{
          border: '2px dashed orangered',
          height: 200,
          width: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p>Click inside this element</p>
      </div>
    );
  };

  return (<ClickBox onClickInside={() => alert('click inside')} onClickOutside={() => alert('click outside')} />)
};
