import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
//import { Container, Row, Button, Col } from "react-bootstrap";
import GenshinTracker from "./components/GenshinTracker/GenshinTracker";
import Preferences from "./components/Preferences";

function App() {
  const [userPref, setUserPref] = useState([]);
  return (
    <BrowserRouter className="App">
      <NavLink to="/home">Home Page</NavLink>
      <NavLink to="/preferences">Preferences</NavLink>
      <Switch>
        <Route path="/home" component={() => <GenshinTracker />} />
        <Route path="/preferences" component={Preferences} />
        <Route path="/404" render={() => <div>Page Not Found</div>} />
        <Redirect to="/404"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
