import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAlert } from 'react-alert';
import EditFacultyForm from './edit-faculty-form.component';
import SemanticLoader from '../../../components/loaders/semantic-loader';
import * as actionCreators from '../faculty-actions';
import facultyService from '../../../service/faculty-service';

class EditFaculty extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
        };
    }

    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            getSubjectsList: PropTypes.func,
            getEditFormValues: PropTypes.func,
            subjects: PropTypes.arrayOf(PropTypes.string),
            formValues: PropTypes.shape({
                name: PropTypes.string,
                subjects: PropTypes.arrayOf(PropTypes.string),
            }),
            match: PropTypes.shape({
                params: PropTypes.shape({
                    id: PropTypes.string,
                }),
            }),
            alert: PropTypes.shape({
                error: PropTypes.func,
                success: PropTypes.func,
            }),
        };
    }

    onSubmit = (values, id) => {
        facultyService.editFaculty(values, id).then(
            (data) => {
                this.props.alert.success(data.toString());
                this.setState({ submitted: true });
            },
            (error) => { this.props.alert.error(error.toString()); },
        );
    };

    componentDidMount() {
        this.props.getSubjectsList();
        this.props.getEditFormValues(this.props.match.params.id);
    }

    render() {
        if (this.state.submitted) return <Redirect to={'/'} />;

        if (!this.props.formValues || !this.props.subjects) {
            return <SemanticLoader />;
        }

        return (
            <EditFacultyForm
                onSubmit={this.onSubmit}
                subjects={this.props.subjects}
                formValues={this.props.formValues}
            />
        );
    }
}


const mapStateToProps = state => ({
    formValues: state.faculty.formValues,
    subjects: state.faculty.subjects,
});

export default withAlert(connect(mapStateToProps, actionCreators)(EditFaculty));
