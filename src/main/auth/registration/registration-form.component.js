import React from "react";
import { Form, Button, Checkbox, Header, Icon, Message } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { reduxForm } from "redux-form";
import LanguageDropDown from '../../../components/languageDropDown/languageDropDown.component';
import { translate } from 'react-i18next';
import "./registration.css";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            averageRating: 0,
            options: this.props.data.options,
            subjects:[],
            submitting: true,
            errorSubmittingMessage: "",
            errorSubmittingMessagePasswords: this.props.t("registration.errorSubmittingMessagePasswords") ,
            errorSubmittingMessageTerms: this.props.t("registration.errorSubmittingMessageTerms")
        };
    }

    subjectsChange = (subjects) => {
        let newSubjects = [];

        subjects.forEach(subject => {
            let newSubject = this.state.options.find((opt) => opt.value === subject);
            let rating = 0;

            if (this.state.subjects[this.getIndexByKey(newSubject.key)]) {
                rating = this.state.subjects[this.getIndexByKey(newSubject.key)].rating;
            }
            
            newSubjects = newSubjects.concat(Object.assign(newSubject, {rating}));
        });

        this.setState({subjects: newSubjects});

    };

    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            t : PropTypes.func,
            data: PropTypes.shape({
                options: PropTypes.arrayOf(PropTypes.shape({
                    key: PropTypes.number,
                    value: PropTypes.string,
                    text: PropTypes.string
                }))
            })
        }
    };

    UNSAFE_componentWillReceiveProps = () => {
        this.setState({
            errorSubmittingMessagePasswords: this.props.t("registration.errorSubmittingMessagePasswords") ,
            errorSubmittingMessageTerms: this.props.t("registration.errorSubmittingMessageTerms")
        })
    };

    changeAverageRating = event => this.setState({ averageRating: event.target.value });

    changeRating = (obj, key) => {
        this.setState((prevState) => {
            let newSubjects = prevState.subjects;
            newSubjects[this.getIndexByKey(key)].rating = obj.value;

            return { subjects: newSubjects }
        });
    };
    
    prepareData = () => {
        if (this.state.password !== this.state.repeated_password) {
            this.setState({submitting: false, errorSubmittingMessage: this.state.errorSubmittingMessagePasswords});
            return;
        }

        if (!this.state.terms) {
            this.setState({submitting: false, errorSubmittingMessage: this.state.errorSubmittingMessageTerms});
            return;
        }

        this.setState({submitting: true});

        let data = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        };
        
        this.props.onSubmit(data);
    };

    getIndexByKey(key) {
        return this.state.subjects.findIndex((subject) => subject.key === key)
    }

    render() {
        const { t } = this.props;

        return (
            <div className="registration-container parent-size">
                <LanguageDropDown/>
                <div className="registration-form">
                    <Form size="large" onSubmit={this.prepareData}>
                        <Header size='huge' textAlign="center">{t("registration.name")}</Header>
    
                        <Form.Input
                            type='email'
                            label={t("registration.labels.email")}
                            placeholder={t("registration.placeholders.email")}
                            width={16}
                            onChange={(event, obj) => this.setState({email: obj.value})}
                            required
                        />

                        <Form.Input
                            type='username'
                            label={t("registration.labels.username")}
                            placeholder={t("registration.placeholders.username")}
                            width={16}
                            onChange={(event, obj) => this.setState({username: obj.value})}
                            required
                        />

                        <Form.Group>
                            <Form.Input
                                label={t("registration.labels.password")}
                                type='password'
                                placeholder={t("registration.placeholders.password")}
                                width={8}
                                onChange={(event, obj) => this.setState({password: obj.value})}
                                required
                            />

                            <Form.Input
                                label={t("registration.labels.repeatPassword")}
                                type='password'
                                placeholder={t("registration.placeholders.repeatPassword")}
                                width={8}
                                onChange={(event, obj) => this.setState({repeated_password: obj.value})}
                                required
                            />
                        </Form.Group>

                        <Form.Field
                            control={Checkbox}
                            label={{ children: t("registration.agreeCheckbox") }}
                            width={13}
                            onChange={(event, obj) => this.setState({terms: obj.checked})}
                            required
                        />

                        <Message
                            error = {this.state.submitting}
                            header={t("registration.errorMessage")}
                            content={this.state.errorSubmittingMessage}
                        />

                        <Button color="google plus" type="submit" floated ="right">
                            <Icon name='checkmark' /> {t("registration.registerButton")}
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default reduxForm({ form: "RegistrationForm" })(translate('common')(RegistrationForm));
