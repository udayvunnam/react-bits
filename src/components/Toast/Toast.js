import React from 'react';
import { createPortal } from 'react-dom';
import './toast.css';

export const Toast = ({ notifications, cancelNotification }) => {
  const renderToast = () => {
    return (
      <div className="notification-container top-right">
        {notifications.map((notification, index) => {
          return (
            <div className={`notification ${notification.type || 'info'}`} key={index}>
              <button className="notification-cancel" onClick={() => cancelNotification(notification)}>X</button>
              <h3 className="notification-title">{notification.title}</h3>
              <p className="notification-message">{notification.message}</p>
              <div className="notification-timing" style={{ width: `${notification.detachTiming}%` }}></div>
            </div>
          )
        })}
      </div>
    )
  }

  return createPortal(renderToast(), document.getElementById('root'));

}
