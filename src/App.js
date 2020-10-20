import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
          <Header></Header>
      <Body></Body>
      <Home></Home>
      <Footer></Footer>
          </Route>

          <Route  path="/home">
          <Header></Header>
      <Body></Body>
      <Home></Home>
      <Footer></Footer>
          </Route>

          <Route  path="/login">
         <Login></Login>
          </Route>
          
        </Switch>
      </Router>
      

    </div>
  );
}

export default App;
