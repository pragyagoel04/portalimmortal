import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import routes from './routes';

render((<Router> 
  <App>
    <Switch>
    {/* <Route path="/" component={App} /> */}
    <Route exact path="/" component={Greetings} />
    <Route path="/signup" component={SignupPage} />
    </Switch>
  </App>
</Router>),
document.getElementById('app'));