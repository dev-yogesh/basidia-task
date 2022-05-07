import { Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AddUser from './components/AddUser/AddUser';
import Users from './components/Users/Users';
import Weather from './components/Weather/Weather';

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
//   { path: '*', element: <Error code={400} message='Page not found' /> },
];