import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import GenshinTracker from "./components/GenshinTracker/GenshinTracker";
import Preferences from "./components/Preferences/Preferences";

import genshinData from "./data/characters";
import Characters from "./components/Characters/Characters";
function App() {
  const [userPref, setUserPref] = useState(
    //add a "checked" property to the data for use in Preferences
    genshinData.map((char) => {
      return { ...char, checked: true };
    })
  );
  return (
    <BrowserRouter className="App">
      {/* <div className="parent navibar">
        <NavLink to="/home">Home Page</NavLink>
        <NavLink to="/preferences">Preferences</NavLink>
      </div> */}
      <Navigation></Navigation>
      <Switch>
        <Route
          path="/home"
          component={() => <GenshinTracker userPref={userPref} />}
        />
        <Route
          path="/preferences"
          component={() => (
            <Preferences userPref={userPref} setUserPref={setUserPref} />
          )}
        />
        {/* <Route path="/characters" component={() => <Characters />} /> */}
        <Route path="/404" render={() => <div>Page Not Found</div>} />
        <Redirect to="/404"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
