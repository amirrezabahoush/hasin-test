import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './../layouts/Main';
import AuthLayout from './../layouts/Auth';
import SignUp from 'pages/Auth/SignUp';
import PhoneCheck from 'pages/Auth/PhoneCheck';
import SetPassword from 'pages/Auth/SetPassword';
import Login from 'pages/Auth/Login';
import Dashboard from 'pages/Dashboard';

export const PrivateRoutes = {
  element: <MainLayout />,
  children: [
    { path: '/dashboard', element: <Dashboard/> },
  ]
};

export const AuthRoutes = {
  element: <AuthLayout />,
  children: [
    { path: '/', element: <Login /> },
    { path: '/signup', element: <SignUp />, index: true },
    { path: '/signup/check-phone', element: <PhoneCheck /> },
    { path: '/signup/set-password', element: <SetPassword /> },
    { path: '*', element: <Navigate to="/" /> },
  ],
};
