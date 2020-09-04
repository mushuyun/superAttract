import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/homePage/HomePage';
import ShopPage from "./pages/shopPage/ShopPage";
import SignInAndSignUpPage from "./pages/signIn-signUp/SignInAndSignUpPage";
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribedFromAuth=null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

         console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }


  componentWillUnmount(){
    this.unsubscribedFromAuth()
  };

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
