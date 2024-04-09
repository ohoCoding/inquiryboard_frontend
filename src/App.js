
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
