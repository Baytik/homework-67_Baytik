import React, {Component, Fragment} from 'react';
import './App.css';
import Intercom from "./Components/Intercom/Intercom";
import Header from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";

class App extends Component {
    render() {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" component={Intercom}/>
            </Switch>
        </Fragment>
    )
  }
}

export default App;
