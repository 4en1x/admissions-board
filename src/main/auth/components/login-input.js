import React from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from "semantic-ui-react";
import PropTypes from 'prop-types';
import "./login-input.css";

export default class LoginInputForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }

    onSubmitClicked = () => {
        this.props.inputHandle(this.state.username, this.state.password);
    };

    static get propTypes() {
        return {
            inputHandle: PropTypes.func
        }
    };

    render() {
        return (
            <Form size="large">
                <Form.Field>
                    <input
                        placeholder="username"
                        onChange={event => this.setState({username: event.target.value})}
                    />
                </Form.Field>

                <Form.Field>
                    <input
                        placeholder="password"
                        type="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                </Form.Field>

                <div>
                    <Link to="/registration" className="link-container">
                        Create account
                    </Link>
                    
                    <Button
                        color="google plus"
                        floated="right"
                        onClick={this.onSubmitClicked}
                    >
                        Next
                    </Button>
                </div>
            </Form>
        );
    }
}
