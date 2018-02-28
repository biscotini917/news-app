import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import logo from './NRlogo.png'
// import { removeCurrentUser } from '../redux/auth';

/* -----------------    COMPONENT     ------------------ */

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
    this.renderLogout = this.renderLogout.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
        <img className="logo" src={logo} />
          <div>
              {this.renderLogout()}
              {this.renderLoginSignup()}
          </div>
        </div>
      </nav>
    );
  }

  renderLoginSignup() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
         <NavLink to="/signup" activeClassName="active">signup</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">login</NavLink>
        </li>
      </ul>
    );
  }

  renderLogout() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
        <button
          className="navbar-btn btn btn-default"
          onClick={this.props.logout}
          >
          logout
        </button>
        </li>
      </ul>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

// const mapState = (storeState) => ({
//   hasCurrentlyLoggedInUser: storeState.currentUser.hasOwnProperty('id')
// });

// const mapDispatch = (dispatch, ownProps) => ({
//   logout: () => {
//     dispatch(removeCurrentUser())
//     ownProps.history.push('/');
//   }
// });

// export default withRouter(connect(mapState, mapDispatch)(Navbar));

// {
//   this.props.hasCurrentlyLoggedInUser
//   ? this.renderLogout()
//   : this.renderLoginSignup()
// }
