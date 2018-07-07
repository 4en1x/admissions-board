import React from "react";
import { Form, Button } from "semantic-ui-react";

export default class EmailInputForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onNextClicked = () => {
    this.props.inputHandle(this.input.value);
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

