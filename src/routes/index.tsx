import { Navigate } from 'react-router-dom';
import MainLayout from './../layouts/Main';
import AuthLayout from './../layouts/Auth';
import SignUp from 'pages/Auth/SignUp';
import PhoneCheck from 'pages/Auth/PhoneCheck';
import SetPassword from 'pages/Auth/SetPassword';
import Login from 'pages/Auth/Login';
import Profile from 'pages/User/Profile';
import ChangePassworrd from 'pages/User/ChangePassword';
import Dashboard from 'pages/Ticket';

export const PrivateRoutes = {
  element: <MainLayout />,
  children: [
    { path: '/dashboard', element: <Dashboard/> },
    { path: '/profile', element: <Profile/> },
    { path: '/change-password', element: <ChangePassworrd/> },
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
