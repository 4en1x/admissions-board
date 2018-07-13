import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header.components';
import FacultyTable from '../faculty/faculty-table.component';
import CabinetPage from '../cabinet/cabinet.component'
import FacultyEdit from '../faculty/edit/edit-faculty.component'
import { Route, Switch } from 'react-router-dom';
import { store } from '../../index';
import { logout } from '../auth/auth-actions';
import './App.css';
import { translate } from 'react-i18next';

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
            <div>
                <Header
                    user={{ name: user.name, role: user.role }}
                    itemSelected={this.itemSelected}
                />

                <Switch>
                    <Route path="/cabinet" component={CabinetPage}/>
                    <Route path="/faculties/edit/:id" component={FacultyEdit}/>
                    <Route path="/" component={FacultyTable} />
                </Switch>
            </div>
        );
    }
}

export default translate('common')(App);
