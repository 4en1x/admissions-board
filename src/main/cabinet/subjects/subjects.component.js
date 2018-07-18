import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import SemanticLoader from '../../../components/loaders/semantic-loader';

import SubjectsForm from './subjects-form.component';
import { editSubjects } from '../cabinet-actions';
import { getSubjectsList } from '../../faculty/faculty-actions';


class SubjectsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
        };
    }

    onSubmit = (data) => {
        this.props.editSubjects(data);
        this.setState({ submitted: true });
    };

    static get propTypes() {
        return {
            subjects: PropTypes.arrayOf(PropTypes.string),
            editSubjects: PropTypes.func,
            getSubjectsList: PropTypes.func,
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
            <SubjectsForm onSubmit={this.onSubmit} subjects={this.props.subjects}/>
        );
    }
}

const mapStateToProps = state => ({
    subjects: state.faculty.subjects,
});

export default connect(mapStateToProps, { editSubjects, getSubjectsList })(SubjectsComponent);
