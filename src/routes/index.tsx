import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './../layouts/Main';
import AuthLayout from './../layouts/Auth';
import SignUp from 'pages/Auth/SignUp';
import PhoneCheck from 'pages/Auth/PhoneCheck';
import SetPassword from 'pages/Auth/SetPassword';
import Login from 'pages/Auth/Login';

export const PrivateRoutes = {
  element: <MainLayout />,
  children: [
    { path: '/a', element: <></> },
  ]
};

export const AuthRoutes = {
  element: <AuthLayout />,
  children: [
    { path: '/', element: <SignUp />, index: true },
    { path: '/signup/check-phone', element: <PhoneCheck /> },
    { path: '/signup/set-password', element: <SetPassword /> },
    { path: '/signup/login', element: <Login /> },
    { path: '*', element: <Navigate to="/" /> },
  ],
};
