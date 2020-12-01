import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../App";

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Signin}></Route>
      <Route exact path="/home" component={Home}></Route>
    </Switch>
  );
};

export default Main;
