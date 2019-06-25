import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes';

const store = createStore(
  (state = {}) => state,
  // dispatch asynchronous actions
  applyMiddleware(thunk)
)

render((
<Provider store={store}>
  <Router> 
    <App>
      <Switch>
      {/* <Route path="/" component={App} /> */}
      <Route exact path="/" component={Greetings} />
      <Route path="/signup" component={SignupPage} />
      </Switch>
    </App>
  </Router>
</Provider>
),
document.getElementById('app'));