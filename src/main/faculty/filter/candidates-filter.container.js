import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actionCreators from '../faculty-actions';

import FacultiesFilterForm from '../../../components/filter/filter-forms/faculties-filter-form';
import SemanticLoader from '../../../components/loaders/semantic-loader';
import './filter.css';

class FilterComponent extends React.Component {
    componentDidMount() {
        this.props.getSubjectsList();
    }

    onSubmitClicked = (filter) => {
        this.props.onFilter(filter);
    };

    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            getSubjectsList: PropTypes.func,
            subjects: PropTypes.arrayOf(PropTypes.string),
            onFilter: PropTypes.func,
        };
    }

    render() {
        if (!this.props.subjects) {
            return <SemanticLoader />;
        }

        return (
            <div className="filter-container">
                <FacultiesFilterForm
                    onReportClicked={this.onReportClicked}
                    onSubmit={this.onSubmitClicked}
                    subjects={this.props.subjects}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    subjects: state.faculty.subjects,
});

export default connect(mapStateToProps, actionCreators)(FilterComponent);
