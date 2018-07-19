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
            subjects: this.prepareDataForDropDown(this.props.subjects),
            statuses: this.prepareDataForDropDown([
                'Enrollment has already expired',
                'Enrollment still goes',
            ]),
            newStatuses: [],
            newSubjects: [],
        };
    }

    handleChange = () => this.setState(prevState => ({
        sortValue: !prevState.sortValue,
    }));

    prepareDataForDropDown = (data) => {
        if (!data) {
            return [];
        }

        return data.map((item, index) => ({ key: index, value: index, text: item }));
    };

    getSubjectsByKeys(keys) {
        return keys.map(key => this.state.subjects.find(subject => subject.key === key).text);
    }

    getStatusesByKeys(keys) {
        return keys.map(key => this.state.statuses.find(subject => subject.key === key).text);
    }

    prepareForSubmit = () => {
        const data = {
            subjects: this.state.newSubjects,
            statuses: this.state.newStatuses,
            order: this.state.sortValue,
        };

        this.props.onSubmit(data);
    };

    render() {
        return (
            <Form className="filter-form" onSubmit={this.prepareForSubmit}>
                <Field
                    name="status"
                    label="Status"
                    items={this.state.statuses}
                    component={DropdownComponent}
                    onChange={(event, obj) => this.setState({ newStatuses: this.getStatusesByKeys(obj) })}
                />
                <Field
                    name="subjects"
                    label="Subjects"
                    items={this.state.subjects}
                    component={DropdownComponent}
                    onChange={(event, obj) => this.setState({ newSubjects: this.getSubjectsByKeys(obj) })}
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
    subjects: PropTypes.arrayOf(PropTypes.string),
};

export default reduxForm({ form: 'CandidatesFilterForm' })(FacultiesFilterForm);
