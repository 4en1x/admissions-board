import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header/header.components';
import FacultyTable from '../faculty/faculty-table.component';
import CabinetPage from '../cabinet/cabinet.component'
import FacultyEdit from '../faculty/edit/edit-faculty.component'
import FacultyAdd from '../faculty/add/add-faculty.component'
import EditSubjects from '../cabinet/subjects/subjects.component'

import { Route, Switch } from 'react-router-dom';
import { store } from '../../index';
import { logout } from '../auth/auth-actions';
import './App.css';
import { translate } from 'react-i18next';

class App extends Component {
    itemSelected = () => {
        store.dispatch(logout());
    };

    static get propTypes() {
        return {
            user: PropTypes.shape({
                login: PropTypes.string,
                role: PropTypes.string
            }),
        }
    };

    render() {
        const user = this.props.user;

        return (
            <div>
                <Header
                    user={{ login: user.login, role: user.role }}
                    itemSelected={this.itemSelected}
                />

                <Switch>
                    <Route path="/cabinet" component={CabinetPage}/>
                    <Route path="/editSubjects" component={EditSubjects}/>
                    <Route path="/faculties/edit/:id" component={FacultyEdit}/>
                    <Route path="/faculties/add" component={FacultyAdd}/>
                    <Route path="/" component={FacultyTable} />
                </Switch>
            </div>
        );
    }
}

export default translate('common')(App);
