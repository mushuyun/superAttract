import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import './App.css';

import HomePage from './pages/homePage/HomePage';
import ShopPage from "./pages/shopPage/ShopPage";
import SignInAndSignUpPage from "./pages/signIn-signUp/SignInAndSignUpPage";
import CheckOutPage from "./pages/checkOut/CheckOutPage";

import Header from './components/header/Header';

import { auth, createUserProfileDocument, signInWithGoogle } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";
// import { selectCartItems } from './redux/cart/cartSelectors';
// import { createStore } from 'redux';


class App extends React.Component {

  unsubscribedFromAuth=null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount(){
    this.unsubscribedFromAuth()
  };

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/signin" render={()=>
            this.props.currentUser ? <Redirect to ="/" />
            :(<SignInAndSignUpPage />)
          }  />
        </Switch>
        
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
