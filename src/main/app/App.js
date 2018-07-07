import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header.components';
import { store } from '../../index';
import { logout } from '../auth/auth-actions';
import './App.css';

class App extends Component {
    itemSelected = () => {
        store.dispatch(logout());
    };

    static defaultProps = {
        user: {}
    };

    static get propTypes() {
        return {
            user: PropTypes.shape({
                name: PropTypes.string,
                role: PropTypes.string
            }),
        }
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
