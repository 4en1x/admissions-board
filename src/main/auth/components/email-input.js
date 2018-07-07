import React from "react";
import { Form, Button } from "semantic-ui-react";
import PropTypes from 'prop-types';

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

                <Button
                    color="google plus"
                    floated="right"
                    onClick={this.onNextClicked}
                >
                    Next
                </Button>
            </Form>
        );
    }
}
