import { Navigate } from 'react-router-dom';

import Layout from './modules/dashboard/components/Layout/Layout';
import AddUser from './modules/addUser/components/AddUser/AddUser';
import Users from './modules/users/components/Users/Users';
import Weather from './modules/weather/components/Weather/Weather';

export const appRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Navigate to='/add-user' replace /> },
      { path: 'add-user', element: <AddUser /> },
      { path: 'users', element: <Users /> },
      { path: 'weather', element: <Weather /> },
    ],
  },
];
