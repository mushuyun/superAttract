import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/HomePage';
import ShopPage from "./pages/shopPage/ShopPage";
import SignInAndSignUpPage from "./pages/signIn-signUp/SignInAndSignUpPage"
import Header from './components/header/Header';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
  );
}

export default App;
