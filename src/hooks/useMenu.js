import { useState } from 'react';

export const useMenu = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const handleMenu = () => {
    if (menuStatus) {
      setMenuStatus(false);
    } else {
      setMenuStatus(true);
    }
  };
  return {
    handleMenu,
    menuStatus,
  };
};
