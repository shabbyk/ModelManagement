import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Models from "./components/models";
import ModelsForm from "./components/modelsForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/models/:id" component={ModelsForm}></Route>
          <Route path="/models" component={Models}></Route>
          <Route path="/not-Found" component={NotFound}></Route>
          <Redirect from="/" exact to="/models" />
          <Redirect to="/not-Found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
