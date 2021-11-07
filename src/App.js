import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container';
import Loader from './components/Loader';
import routes from './routes/routes';

const LoginView = lazy(() =>
  import('./views/Login/LoginView' /* webpackChunkName: "login-page" */),
);
const RequestView = lazy(() =>
  import('./views/Request /RequestView' /* webpackChunkName: "request-page" */),
);
const RangeViews = lazy(() =>
  import('./views/RangeView/RangeViews' /* webpackChunkName: "range-page" */),
);

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path={routes.login} component={LoginView} />
          <Route exact path={routes.users} component={RangeViews} />
          <Route exact path={routes.request} component={RequestView} />
        </Switch>
      </Suspense>
    </Container>
  );
};
export default App;
