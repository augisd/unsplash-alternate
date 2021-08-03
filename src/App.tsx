import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { AllPhotosContainer } from "./features/photos/AllPhotosContainer";
import { FavoritePhotosContainer } from "./features/photos/FavoritePhotosContainer";
import { Modal } from "./app/Modal/Modal";
import { ModalContainer } from "./app/Modal/ModalContainer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={AllPhotosContainer} />
          <Route exact path="/favorites" component={FavoritePhotosContainer} />
          <Redirect to="/home" />
        </Switch>
        <ModalContainer />
      </div>
    </Router>
  );
}

export default App;
