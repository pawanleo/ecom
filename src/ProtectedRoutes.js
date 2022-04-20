import React from 'react';

import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
  const auth = localStorage.getItem('token');
  return auth ? children : <Navigate to="/" />;
}
export default ProtectedRoutes;