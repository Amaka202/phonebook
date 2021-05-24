import React from 'react';
import Login from './Login';
import { Route, Switch } from "react-router-dom";
import Contacts from './Contacts';
import {ProtectedRoutes} from './ProtectedRoute';

function App() {
  return (
    <div>
      <Switch>
          <Route path='/' exact component={Login} />
          <ProtectedRoutes path='/contacts' exact component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
