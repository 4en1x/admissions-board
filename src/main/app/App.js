import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header.components';
import FacultyTable from '../faculty/faculty-table.component';
import { store } from '../../index';
import { logout } from '../auth/auth-actions';
import './App.css';
import { translate, Trans } from 'react-i18next';

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
        const { t, i18n } = this.props;

        return (
            <div>
                <Header
                    user={{ name: user.name, role: user.role }}
                    itemSelected={this.itemSelected}
                />

                <FacultyTable/>
            </div>
        );
    }
}

export default translate('common')(App);
