import './App.css';
import { useRoutes } from 'react-router-dom';
import { appRoutes } from './routes';

const App = () => {
  const routes = useRoutes(appRoutes);

  return routes;
};

export default App;