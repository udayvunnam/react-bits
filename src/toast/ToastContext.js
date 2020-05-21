import React, { useState, useContext, createContext, useEffect } from 'react';
import { Toast } from './Toast';

const ToastContext = createContext([]);
const ToastActionsContext = createContext(() => { });

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error(`useToastContext must be called within ToastProvider`);
  }
  return context;
};

export const useToastActionsContext = () => {
  const context = useContext(ToastActionsContext);
  if (context === undefined) {
    throw new Error(`useToastActionsContext must be called within ToastProvider`);
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (notifications.length > 0) {
      const timingId = setInterval(() => {
        const timeBoundNotifications = notifications.map(notification => {
          notification.detachTiming = notification.detachTiming - 1;
          return notification;
        }).filter(notification => notification.detachTiming !== 0);

        setNotifications(timeBoundNotifications);
      }, 100);
      return () => {
        clearInterval(timingId)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications]);

  const toast = (notification) => {
    notification.detachTiming = 100;
    setNotifications([...notifications, notification]);
  };

  const cancelNotification = (index) => {
    setNotifications(notifications.filter((val, i) => i !== index))
  };

  return (
    <ToastContext.Provider value={notifications}>
      <ToastActionsContext.Provider value={toast}>
        <Toast cancelNotification={cancelNotification} notifications={notifications} />
        {children}
      </ ToastActionsContext.Provider>
    </ToastContext.Provider>
  );
}

