import React from "react";
import { Form, Button, Header, Icon, Message } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { Field, reduxForm } from "redux-form";
import "./edit-entrant.css";
import { translate } from 'react-i18next';
import roles from '../../../configs/roles'

import DropdownComponent from "../../../components/filter/components/dropdown.component";

class EditEntrantForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allSubjects: this.prepareDataForDropDown(this.props.subjects),
            subjects: this.props.formValues.subjects || [],
            email: this.props.formValues.email || "",
            name: this.props.formValues.name || "",
            surname: this.props.formValues.surname || "",
            username: this.props.formValues.username || "",
            averageRating: this.props.formValues.averageRating || 0,
            submitting: true,
            errorSubmittingMessage: "",
            errorSubmittingMessageSubjects: this.props.t("entrant.edit.errorSubmittingMessageSubjects"),
            errorSubmittingMessagePasswords: this.props.t("entrant.edit.errorSubmittingMessagePasswords") ,
            currentLanguage: this.props.i18n.language,
        };
    }

    prepareDataForDropDown = (data) => {
        if (!data) {
            return [];
        }

        return data.map((item, index) => {return {key: index, value: index, text: item}})
    };

    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            t: PropTypes.func,
            subjects: PropTypes.arrayOf(PropTypes.string),
            i18n: PropTypes.shape({
                language: PropTypes.string,
            }),
            formValues: PropTypes.shape({
                name: PropTypes.string,
                surname: PropTypes.string,
                username: PropTypes.string,
                email: PropTypes.string,
                averageRating: PropTypes.number,
                subjects: PropTypes.arrayOf(PropTypes.shape({
                    subject: PropTypes.string,
                    rating: PropTypes.number,
                })),
            }),
            role: PropTypes.string,
        }
    };

    changeAverageRating = event => this.setState({ averageRating: event.target.value });

    changeRating = (obj, subject) => {
        this.setState((prevState) => {
            let newSubjects = prevState.subjects.map( item =>{
                if (item.subject === subject) {
                    return {
                        subject: item.subject,
                        rating: parseInt(obj.value)
                    }
                }

                return item;
            });

            return { subjects: newSubjects }
        });
    };

    getKeysByNames(names) {
        return names.map(name => {
            return this.state.allSubjects.find((subject) => {
                return subject.text === name.subject
            }).key
        })
    }

    getSubjectsByKeys(keys) {
        return  keys.map(key => {
            const name =  this.state.allSubjects.find((subject) => subject.key === key).text;
            const item = this.state.subjects.find((data) => data.subject === name)
            let rating = 0;

            if (item) {
                rating = item.rating
            }

            return  {
                subject: name,
                rating: rating,
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentLanguage !== prevProps.i18n.language) {
            let newErrorSubmittingMessage = this.props.t("entrant.edit.errorSubmittingMessagePasswords");

            if (prevState.errorSubmittingMessage === prevState.errorSubmittingMessageSubjects) {
                newErrorSubmittingMessage = this.props.t("entrant.edit.errorSubmittingMessageSubjects")
            }

            this.setState({
                errorSubmittingMessage: newErrorSubmittingMessage,
                errorSubmittingMessagePasswords: this.props.t("entrant.edit.errorSubmittingMessagePasswords") ,
                errorSubmittingMessageSubjects: this.props.t("entrant.edit.errorSubmittingMessageSubjects"),
                currentLanguage: prevProps.i18n.language
            })
        }
    }

    prepareData = () => {
        if (this.state.password !== this.state.repeated_password) {
            this.setState({submitting: false, errorSubmittingMessage: this.state.errorSubmittingMessagePasswords});
            return;
        }

        if (this.state.subjects.length !== 3 && this.props.role === roles.USER.ROLE) {
            this.setState({submitting: false, errorSubmittingMessage: this.state.errorSubmittingMessageSubjects});
            return;
        }

        this.setState({submitting: true});
        
        let data = {
            email: this.state.email,
            username: this.state.username,
            name: this.state.name,
            surname: this.state.surname,
            averageRating: this.state.averageRating,
            subjects: this.state.subjects
        };

        if (this.props.role === roles.USER.ROLE) {
            this.data.averageRating = this.state.averageRating;
            this.data.subjects = this.state.subjects;
        }

        if (this.state.password) {
            data.password = this.state.password;
        }

        this.props.onSubmit(data);
    };

    render() {
        const { t } = this.props;

        return (
            <div className="entrant-edit-form">
                <Form size="large" onSubmit={this.prepareData}>
                    <Header size='huge' textAlign="center">{t("entrant.edit.name")}</Header>

                    <Form.Input
                        type='email'
                        label={t("entrant.edit.labels.email")}
                        placeholder={t("entrant.edit.placeholders.email")}
                        width={16}
                        defaultValue={this.state.email}
                        onChange={(event, obj) => this.setState({email: obj.value})}
                    />

                    <Form.Input
                        type='username'
                        label={t("entrant.edit.labels.username")}
                        placeholder={t("entrant.edit.placeholders.username")}
                        width={16}
                        defaultValue={this.state.username}
                        onChange={(event, obj) => this.setState({username: obj.value})}
                    />

                    <Form.Group>
                        <Form.Input
                            label={t("entrant.edit.labels.name")}
                            placeholder={t("entrant.edit.placeholders.name")}
                            width={8}
                            defaultValue={this.state.name}
                            onChange={(event, obj) => this.setState({name: obj.value})}
                        />

                        <Form.Input
                            label={t("entrant.edit.labels.surname")}
                            placeholder={t("entrant.edit.placeholders.surname")}
                            width={8}
                            defaultValue={this.state.surname}
                            onChange={(event, obj) => this.setState({surname: obj.value})}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Input
                            label={t("entrant.edit.labels.password")}
                            type='password'
                            placeholder={t("entrant.edit.placeholders.password")}
                            width={8}
                            onChange={(event, obj) => this.setState({password: obj.value})}
                        />

                        <Form.Input
                            label={t("entrant.edit.labels.repeatPassword")}
                            type='password'
                            placeholder={t("entrant.edit.placeholders.repeatPassword")}
                            width={8}
                            onChange={(event, obj) => this.setState({repeated_password: obj.value})}
                        />
                    </Form.Group>

                    {
                        this.props.role === roles.USER.ROLE ? (<div>
                                <Form.Input
                                    label={`${t("entrant.edit.averageScoreMessage")}: ${this.state.averageRating}`}
                                    type='range'
                                    min={0}
                                    max={100}
                                    value={this.state.rating}
                                    defaultValue={this.state.averageRating}
                                    onChange={this.changeAverageRating}
                                    className="ui blue range"
                                    width={12}
                                />

                                <Field
                                    name="subjects"
                                    label={t("entrant.edit.labels.subjects")}
                                    items={this.state.allSubjects}
                                    defaultItems={this.getKeysByNames(this.state.subjects)}
                                    onChange={(event, obj) => this.setState({subjects: this.getSubjectsByKeys(obj)})}
                                    component={DropdownComponent}
                                />

                                <br/>

                                {
                                    this.state.subjects.map(item => {
                                        let key = this.getKeysByNames([item])[0]
                                        return <div key ={key}>
                                            <Form.Input
                                                label={`${t("entrant.edit.scoreMessage")} ${item.subject}: ${item.rating}`}
                                                type='range'
                                                min={0}
                                                max={100}
                                                value={item.rating}
                                                onChange={(event, obj) => this.changeRating(obj, item.subject)}
                                                className="ui blue range"
                                                width={12}
                                            />
                                        </div>
                                    })
                                }
                            </div>
                        ):null}

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
        );
    }
}

export default reduxForm({ form: "EditEntrantForm" })(translate('common')(EditEntrantForm));
