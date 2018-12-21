import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AccountDashboard from './components/Dashboard';

class App extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
        userInput: '',
    };

    handleOpen = () => {
        this.setState({ openModalNewAccount: true });
    };

    handleClose = () => {
        this.setState({ openModalNewAccount: false });
    };

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {/*<Route exact path="/add-account" component={ModalContainer} />*/}
                    </Switch>
                    <AppHeader />
                    <AccountDashboard />
                </div>
            </Router>

        );
    }
}

export default App;
