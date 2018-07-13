import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditFacultyForm from './edit-faculty-form.component';

import * as actionCreators from '../faculty-actions'

class EditFaculty extends React.Component {
    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            getSubjectsList: PropTypes.func,
            getEditFormValues: PropTypes.func,
        }
    };

    componentDidMount() {
        this.props.getSubjectsList();
        this.props.getEditFormValues();
    }

    render() {
        return (
            <EditFacultyForm
                subjects={this.props.subjects}
                formValues={this.props.formValues}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        formValues: state.faculty.formValues,
        subjects: state.faculty.subjects,
    };
};

export default connect(mapStateToProps, actionCreators)(EditFaculty);
