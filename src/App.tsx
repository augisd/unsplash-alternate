import React from "react";
import "./styles/_main.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { AllPhotosContainer } from "./features/photos/AllPhotosContainer";
import { FavoritePhotosContainer } from "./features/photos/FavoritePhotosContainer";
import { ModalContainer } from "./app/Modal/ModalContainer";
import { PhotoContainer } from "./features/photos/PhotoContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={AllPhotosContainer} />
          <Route exact path="/favorites" component={FavoritePhotosContainer} />
          <Redirect to="/home" />
        </Switch>
        <ModalContainer>
          <PhotoContainer />
        </ModalContainer>
      </div>
    </Router>
  );
}

export default App;
