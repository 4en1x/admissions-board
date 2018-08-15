import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';
import SemanticLoader from '../../../components/loaders/semantic-loader';

import SubjectsForm from './subjects-form.component';
import subjectService from '../../../service/subject-service';
import { getSubjectsList } from '../../faculty/faculty-actions';


class SubjectsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
        };
    }

    onSubmit = (values) => {
        subjectService.editSubjects(values).then(
            (data) => {
                this.props.alert.success(data.toString());
                this.setState({ submitted: true });
            },
            (error) => { this.props.alert.error(error.toString()); },
        );
    };

    static get propTypes() {
        return {
            subjects: PropTypes.arrayOf(PropTypes.string),
            editSubjects: PropTypes.func,
            getSubjectsList: PropTypes.func,
            alert: PropTypes.shape({
                error: PropTypes.func,
                success: PropTypes.func,
            }),
        };
    }

    componentDidMount() {
        this.props.getSubjectsList();
    }

    render() {
        if (this.state.submitted) return <Redirect to={'/cabinet'} />;

        if (!this.props.subjects) {
            return <SemanticLoader />;
        }

        return (
            <SubjectsForm className="full-height" onSubmit={this.onSubmit} subjects={this.props.subjects}/>
        );
    }
}

const mapStateToProps = state => ({
    subjects: state.faculty.subjects,
});

export default withAlert(connect(mapStateToProps, { getSubjectsList })(SubjectsComponent));
