import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import HomePage from './components/pages/HomePage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';

const App=()=>(
    <div className="ui container">
        <Route path="/"  location={location} exact component={HomePage}/>
        <Route path="/confirmation/:token" location={location} exact component={ConfirmationPage}/>
        <GuestRoute path="/login"  location={location} exact component={LoginPage}/>
        <GuestRoute location={location} path="/signup" exact component={SignupPage}/>
        <GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordPage}/>
        <GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordPage}/>
        <UserRoute  path="/dashboard"  location={location} exact component={DashboardPage}/>
    </div>
);

App.propTypes ={
    location:PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated:PropTypes.bool.isRequired
};

export default App;

function mapStateToProps(state) {
    return {
        isAuthenticated:!! state.user.email
    }
}

export default connect(mapStateToProps)(App);
