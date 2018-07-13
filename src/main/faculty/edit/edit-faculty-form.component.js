import React from "react";
import { Form, Button, Checkbox, Header, Icon, Message } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import "./edit-faculty.css";

import DropdownComponent from "../../../components/filter/components/dropdown.component";

class EditFacultyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subjects: this.prepareDataForDropDown(this.props.subjects),
            formValues: this.props.formValues || {},
            submitting: true,
        };
    }

    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            t: PropTypes.func,
        }
    };

    prepareDataForDropDown = (data) => {
        if (!data) {
            return [];
        }

        return data.map((item, index) => {return {key: index, value: index, text: item}})
    };

    getIndexByKey(key) {
        return this.state.subjects.findIndex((subject) => subject.key === key)
    }
    
    getKeysByNames(names) {
        return names.map(name => this.state.subjects.find((subject) => subject.text === name).key)
    }
    
    render() {
        const { t } = this.props;
        
        return (
            <div className="registration-container parent-size">
                <div className="registration-form">
                    <Form size="large" onSubmit={this.prepareData}>
                        <Header size='huge' textAlign="center">{t("faculty.edit.name")}</Header>
                        
                        <Form.Input
                            label={t("faculty.edit.labels.name")}
                            placeholder={t("faculty.edit.placeholders.name")}
                            width={16}
                            value={this.state.formValues.name}
                            onChange={(event, obj) => this.setState({name: obj.value})}
                        />
                        
                        <Field
                            name="subjects"
                            label="Subjects"
                            items={this.state.subjects}
                            defaultItems={this.getKeysByNames(this.state.formValues.subjects)}
                            component={DropdownComponent}
                        />
                        
                        <Form.Field
                            control={Checkbox}
                            toggle
                            label={{ children: t("faculty.edit.labels.deleteCheckbox") }}
                            width={13}
                            onChange={(event, obj) => this.setState({terms: obj.checked})}
                        />
                        
                        <Message
                            error = {this.state.submitting}
                            header={t("registration.errorMessage")}
                            content={this.state.errorSubmittingMessage}
                        />
                        
                        <Button color="google plus" type="submit" floated ="right">
                            <Icon name='checkmark' /> {t("faculty.edit.editButton")}
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default reduxForm({ form: "EditFacultyForm" })(translate('common')(EditFacultyForm));
