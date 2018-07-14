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
            submitting: true,
            subjects: this.prepareDataForDropDown(this.props.subjects),
            id: this.props.formValues.id,
            name: this.props.formValues.name,
            newSubjects: this.props.formValues.subjects,
            recruitmentPlan: this.props.formValues.recruitmentPlan,
            requestsSubmitted: this.props.formValues.requestsSubmitted,
            errorSubmittingMessageSubjects: this.props.t("faculty.edit.errorSubmittingMessageSubjects"),
            deleteRequestsSubmitted: false,
            currentLanguage: this.props.i18n.language,
        };
    }

    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            t: PropTypes.func,
            subjects: PropTypes.arrayOf(PropTypes.string),
            i18n: PropTypes.shape({
                language: PropTypes.string,
            }),
            formValues: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                subjects: PropTypes.arrayOf(PropTypes.string),
                recruitmentPlan: PropTypes.number,
                requestsSubmitted: PropTypes.number,
            })
        }
    };

    prepareDataForDropDown = (data) => {
        if (!data) {
            return [];
        }

        return data.map((item, index) => {return {key: index, value: index, text: item}})
    };

    getKeysByNames(names) {
        return names.map(name => {
            return this.state.subjects.find((subject) => {
                return subject.text === name
            }).key
        })
    }

    componentDidUpdate(prevProps) {
        if (this.state.currentLanguage !== prevProps.i18n.language) {
            this.setState({
                errorSubmittingMessageSubjects: this.props.t("faculty.edit.errorSubmittingMessageSubjects"),
                errorSubmittingMessage: this.props.t("faculty.edit.errorSubmittingMessageSubjects"),
                currentLanguage: prevProps.i18n.language
            })
        }
    }

    prepareData = () => {
        if (this.state.newSubjects.length !== 3) {
            this.setState({submitting: false, errorSubmittingMessage: this.state.errorSubmittingMessageSubjects});
            return;
        }

        this.setState({submitting: true});

        let data = {
            name: this.state.name,
            subjects: this.state.newSubjects,
            recruitmentPlan: this.state.recruitmentPlan,
        };

        if(this.state.deleteRequestsSubmitted) {
            data.deleteRequestsSubmitted = true;
        }

        this.props.onSubmit(data, this.state.id);
    };

    getSubjectsByKeys(keys) {
        return keys.map(key => this.state.subjects.find((subject) => subject.key === key).text)
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
                            defaultValue={this.state.name}
                            onChange={(event, obj) => this.setState({name: obj.value})}
                        />

                        <Field
                            name="subjects"
                            label={t("faculty.edit.labels.subjects")}
                            items={this.state.subjects}
                            defaultItems={this.getKeysByNames(this.state.newSubjects)}
                            onChange={(event, obj) => this.setState({newSubjects: this.getSubjectsByKeys(obj)})}
                            component={DropdownComponent}
                        />

                        <Form.Input
                            type="number"
                            className="recruitmentPlan"
                            label={t("faculty.edit.labels.recruitmentPlan")}
                            placeholder={t("faculty.edit.placeholders.recruitmentPlan")}
                            width={16}
                            defaultValue={this.state.recruitmentPlan}
                            onChange={(event, obj) => this.setState({recruitmentPlan: obj.value})}
                        />

                        <Form.Input
                            type="number"
                            label={t("faculty.edit.labels.requestsSubmitted")}
                            width={16}
                            value={this.state.requestsSubmitted}
                            readOnly
                        />

                        <Form.Field
                            control={Checkbox}
                            toggle
                            label={{ children: t("faculty.edit.labels.deleteCheckbox") }}
                            width={13}
                            onChange={(event, obj) => this.setState({deleteRequestsSubmitted: obj.checked})}
                        />

                        <Message
                            error={this.state.submitting}
                            header={t("faculty.edit.errorMessage")}
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
