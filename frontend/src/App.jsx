 import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import MessageWindow from './Components/Message/MessageWindow';
import { SocketProvider } from './Context/WebSocket';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <SocketProvider>
      <Router>
        <Routes>
          {!user ? (
            <>
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/signup" element={<Signup setUser={setUser} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <>
              <Route path="/chat" element={<MessageWindow user={user} />} />
              <Route path="*" element={<Navigate to="/chat" />} />
            </>
          )}
        </Routes>
      </Router>
    </SocketProvider>
  );
};

export default App;
