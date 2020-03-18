import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './utils/browserHistory';
import CartPage from './pages/CartPage';
import ShippingPage from './pages/ShippingPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <Router history={history}>
        <Switch>
            <Route path={'/cart'} component={CartPage}/>
            <Route path={'/shipping'} component={ShippingPage}/>
            <Route path={'*'} component={NotFoundPage}/>
        </Switch>
    </Router>
  );
}

export default App;
