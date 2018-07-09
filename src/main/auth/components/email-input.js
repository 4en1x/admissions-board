import React from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from "semantic-ui-react";
import PropTypes from 'prop-types';
import "./registration.css";

export default class EmailInputForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onNextClicked = () => {
        this.props.inputHandle(this.input.value);
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
                        type="email"
                        placeholder="email"
                        ref={input => (this.input = input)}
                    />
                </Form.Field>

                <div>
                    <Link to="/registration" className="link-container">
                        Create account
                    </Link>
                    
                    <Button
                        color="google plus"
                        floated="right"
                        onClick={this.onNextClicked}
                    >
                        Next
                    </Button>
                </div>
            </Form>
        );
    }
}
