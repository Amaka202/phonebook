import React from 'react';
import Login from './Login';
import 'rsuite/lib/styles/index.less';
import { Route, Switch } from "react-router-dom";
import Contacts from './Contacts';

function App() {
  return (
    <div>
      <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/contacts' exact component={Contacts} />
          
          {/* <ProtectedRoutes path='/dashboard' exact component={Dashboard} /> */}

          
      </Switch>
    </div>
  );
}

export default App;
