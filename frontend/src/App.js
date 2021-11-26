import './App.css';

import Client from './page/client.module';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="" exact>
          <Client />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
