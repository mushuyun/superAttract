import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cartIcon/CartIcon";
import './Header.scss';
import CartDropdown from '../cartDropdown/CartDropdown';
import cartReducer from "../../redux/cart/cartReducer";

const Header = ({ currentUser, hidden }) => {
    return(
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>

        {/* decide which option to show for signIn & signOut */}
        {
          currentUser ?
          <div className="option" onClick= { () => auth.signOut() }>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      { hidden ? 
        null : <CartDropdown />
      }
    </div>
  );
}

// const mapStateToProps = (state)=> ({
//   currentUser: state.user.currentUser
// })

const mapStateToProps = ({ user: {currentUser}, cart: { hidden }}) => (
  {
    currentUser,
    hidden
  }
)

export default connect(mapStateToProps)(Header);