import React, { useState, createContext, useEffect } from 'react';
import './index.css';

export const ToastContext = createContext({
  notifications: [],
  notify: () => { }
});

export const ToastProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications]);

  const notify = (notification) => {
    notification.detachTiming = 100;
    setNotifications([...notifications, notification]);
  };

  const cancelNotification = (index) => {
    setNotifications(notifications.filter((val, i) => i !== index))
  }

  return (
    <ToastContext.Provider value={{ notifications, notify }}>
      <div className="notification-container top-right">
        {notifications.map((notification, index) => {
          return <Toast notification={notification} index={index} cancelNotification={cancelNotification} key={index} />
        })}
      </div>
      {children}
    </ToastContext.Provider>
  );
}

const Toast = ({ notification, index, cancelNotification }) => {
  const { type = 'info', title, message, detachTiming } = notification;
  return (
    <div className={`notification ${type}`}>
      <button className="notification-cancel" onClick={() => cancelNotification(index)}>X</button>
      <h3 className="notification-title">{title}</h3>
      <p className="notification-message">{message}</p>
      <div className="notification-timing" style={{ width: `${detachTiming}%` }}></div>
    </div>
  )
}
