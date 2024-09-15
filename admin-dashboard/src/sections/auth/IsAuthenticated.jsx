/* eslint-disable prettier/prettier */
import React from 'react';

import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';
export const isAuthenticated = () => {
  const token = Cookies.get('token'); 
  return !!token; 
};


const ProtectedRoute = () => {
  if (isAuthenticated()) {
    return <Outlet />; 
  } else {
    return <Navigate to="/login" />; 
  }
};

export default ProtectedRoute;
