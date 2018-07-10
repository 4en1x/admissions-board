import React from "react";
import { Form, Button, Checkbox, Header, Icon, Message } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { reduxForm } from "redux-form";
import "./registration.css";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            averageRating: 0,
            options: this.props.data.options,
            subjects:[],
            submitting: true,
            errorSubmittingMessage: ""
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
            data: PropTypes.shape({
                options: PropTypes.arrayOf(PropTypes.shape({
                    key: PropTypes.number,
                    value: PropTypes.string,
                    text: PropTypes.string
                }))
            })
        }
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
            this.setState({submitting: false, errorSubmittingMessage:"Passwords do not match"});
            return;
        }

        if (!this.state.terms) {
            this.setState({submitting: false, errorSubmittingMessage:"You didn't agree to the Terms and Conditions"});
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
        return (
            <div className="registration-container parent-size">
                <div className="registration-form">
                    <Form size="large" onSubmit={this.prepareData}>
                        <Header size='huge' textAlign="center">Registration form</Header>
    
                        <Form.Input
                            type='email'
                            label='Email'
                            placeholder='something@something.else'
                            width={16}
                            onChange={(event, obj) => this.setState({email: obj.value})}
                            required
                        />

                        <Form.Input
                            type='username'
                            label='Username'
                            placeholder='Username'
                            width={16}
                            onChange={(event, obj) => this.setState({username: obj.value})}
                            required
                        />

                        <Form.Group>
                            <Form.Input
                                label='Enter Password'
                                type='password'
                                placeholder='Password'
                                width={8}
                                onChange={(event, obj) => this.setState({password: obj.value})}
                                required
                            />

                            <Form.Input
                                label='Repeat Password'
                                type='password'
                                placeholder='Password'
                                width={8}
                                onChange={(event, obj) => this.setState({repeated_password: obj.value})}
                                required
                            />
                        </Form.Group>

                        <Form.Field
                            control={Checkbox}
                            label={{ children: 'I agree to the Terms and Conditions' }}
                            width={13}
                            onChange={(event, obj) => this.setState({terms: obj.checked})}
                            required
                        />

                        <Message
                            error = {this.state.submitting}
                            header='Action Forbidden'
                            content={this.state.errorSubmittingMessage}
                        />

                        <Button color="google plus" type="submit" floated ="right">
                            <Icon name='checkmark' /> Register
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default reduxForm({ form: "RegistrationForm" })(RegistrationForm);
