import React from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from 'prop-types';

export default class PasswordInputForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmitClicked = () => {
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
                        placeholder="password"
                        type="password"
                        ref={input => (this.input = input)}
                    />
                </Form.Field>

                <Button
                    color="google plus"
                    floated="right"
                    onClick={this.onSubmitClicked}
                >
                    Submit
                </Button>
            </Form>
        );
    }
}
