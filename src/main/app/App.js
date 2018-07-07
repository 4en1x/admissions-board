import React, { Component } from 'react';
import Header from '../../components/header/header.components';
import { store } from '../../index';
import { logout } from '../auth/auth-actions';
import './App.css';

class App extends Component {
    itemSelected = () => {
        store.dispatch(logout());
    };

    render() {
        const user = this.props.user;

        return (
            <Header
                user={{ name: user.name, role: user.role }}
                itemSelected={this.itemSelected}
            />
        );
    }
}

export default App;
