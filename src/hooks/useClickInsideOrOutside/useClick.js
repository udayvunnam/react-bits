import { useEffect } from 'react';

export const useClick = ({ ref, parent, onClickInside, onClickOutside }) => {
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  })

  const handleClick = (e) => {
    if (ref.current) {
      if (ref.current.contains(e.target)) {
        onClickInside();
      } else if (parent) {
        if (parent.current.contains(e.target)) {
          onClickOutside();
        }
      } else {
        onClickOutside();
      }
    }
  };
}
