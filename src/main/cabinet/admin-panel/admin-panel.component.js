import React from "react";
import { Button, Header } from "semantic-ui-react";
import PropTypes from 'prop-types';
import "./admin-panel.css";
import { translate } from 'react-i18next';
import { Redirect } from 'react-router-dom';


class AdminPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addFacultyButtonPressed: false,
            changeListOfSubjectsButtonPressed: false
        };
    }

    static get propTypes() {
        return {
            t: PropTypes.func,
        }
    };

    onAddFacultyClicked = () => this.setState({ addFacultyButtonPressed: true});

    render() {
        const { t } = this.props;

        if (this.state.addFacultyButtonPressed) {
            return <Redirect to={`/faculties/add`} />;
        }

        return (
            <div className="admin-panel">
                <Header size='huge' textAlign="center">{t("admin-panel.name")}</Header>

                <Button basic fluid color='teal' onClick={this.onAddFacultyClicked}>{t("admin-panel.addFacultyButton")}</Button>
                <br></br>
                <Button basic fluid color='teal'>{t("admin-panel.changeListOfSubjectsButton")}</Button>
            </div>
        );
    }
}

export default translate('common')(AdminPanel);
