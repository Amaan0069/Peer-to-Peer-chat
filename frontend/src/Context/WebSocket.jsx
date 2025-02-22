
import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const WebSocket = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState({});

  useEffect(() => {
    const newSocket = io('http://localhost:5001');
    setSocket(newSocket);

    newSocket.on('update_online', (data) => {
      setOnlineUsers(data);
    });

    return () => newSocket.close();
  }, []);

  return (
    <WebSocket.Provider value={{ socket, onlineUsers }}>
      {children}
    </WebSocket.Provider>
  );
};

export const useSocket = () => {
  return useContext(WebSocket);
};
