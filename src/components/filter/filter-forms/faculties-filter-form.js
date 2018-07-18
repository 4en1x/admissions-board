import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import DropdownComponent from '../components/dropdown.component';

class FacultiesFilterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortValue: true,
        };
    }

    handleChange = () => this.setState(prevState => ({
        sortValue: !prevState.sortValue,
    }));

    render() {
        const { handleSubmit, onSubmit, data } = this.props;
        const clone = Object.assign({}, data);
        Object.keys(clone).forEach((prop) => {
            const items = clone[prop];
            clone[prop] = items.map(item => ({
                key: item,
                value: item,
                text: item,
            }));
        });

        return (
            <Form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
                <Field
                    name="status"
                    label="Status"
                    items={clone.statuses || []}
                    component={DropdownComponent}
                />
                <Field
                    name="subjects"
                    label="Subjects"
                    items={clone.subjects || []}
                    component={DropdownComponent}
                />
                <Form.Field>
                    Please choose sort order:
                </Form.Field>

                <Form.Field>
                    <Checkbox
                        radio
                        label='Regular'
                        name='checkboxRadioGroup'
                        checked={this.state.sortValue}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Reverse'
                        name='checkboxRadioGroup'
                        checked={!this.state.sortValue}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <div className="filter-item container-right">
                    <Button color="twitter" icon="filter" content="Apply" type="submit"/>
                </div>
            </Form>
        );
    }
}

FacultiesFilterForm.defaultProps = {
    data: {},
};

FacultiesFilterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.shape({
        statuses: PropTypes.arrayOf(PropTypes.string),

    }),
};

export default reduxForm({ form: 'CandidatesFilterForm' })(FacultiesFilterForm);
