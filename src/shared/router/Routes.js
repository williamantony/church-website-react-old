import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = function({ routes }) {
  return (
    <Switch>
      {
        routes.map(route => <Route { ...route } />)
      }
    </Switch>
  );
};

export default Routes;
