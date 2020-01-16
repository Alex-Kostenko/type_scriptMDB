import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import Header from "../components/header";
import routs from "./routes";
import Loader from '../components/loader'


const RoutesPage = () => {

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Container>
          <Header />
          <Switch>
            {routs.map((rout, i) =>
              <Route path={rout.path} key={i} exact={rout.exact}>
                <rout.component />
              </Route>
            )}
          </Switch>
        </Container>
      </Suspense>
    </Router>
  );
};

export default RoutesPage;
