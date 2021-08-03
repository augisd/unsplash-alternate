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

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/home" component={AllPhotosContainer} />
          <Route exact path="/favorites" component={FavoritePhotosContainer} />
          <Route
            exact
            path="/home/:id"
            render={({ match }) => <div>Modal</div>}
          />
          <Route
            exact
            path="/favorites/:id"
            render={({ match }) => <div>Modal</div>}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
