import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddFacultyForm from './add-faculty-form.component';
import SemanticLoader from '../../../components/loaders/semantic-loader';
import * as actionCreators from '../faculty-actions';
import facultyService from '../../../service/faculty-service';

class AddFaculty extends React.Component {
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
            match: PropTypes.shape({
                params: PropTypes.shape({
                    id: PropTypes.string,
                }),
            }),
        };
    }

    onSubmit = (data) => {
        facultyService.addFaculty(data);
        this.setState({ submitted: true });
    };

    componentDidMount() {
        this.props.getSubjectsList();
    }

    render() {
        if (this.state.submitted) return <Redirect to={'/'} />;

        if (!this.props.subjects) {
            return <SemanticLoader />;
        }

        return (
            <AddFacultyForm
                onSubmit={this.onSubmit}
                subjects={this.props.subjects}
            />
        );
    }
}


const mapStateToProps = state => ({
    subjects: state.faculty.subjects,
});

export default connect(mapStateToProps, actionCreators)(AddFaculty);
