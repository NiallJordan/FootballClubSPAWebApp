import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
//import request from "superagent";
import * as api from './api';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import ClubPage from "./components/clubComponents/clubPage/clubPage";

class Router extends Component {
  
  render() {
    return (
       <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid ">
            <Switch>
              <Route path="/clubs/:id" component={ClubPage} />
              <Route exact path="/" component={App} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById("root"));
