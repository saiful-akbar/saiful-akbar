import React from 'react';
import {
  Navigate
} from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

export default routes;
