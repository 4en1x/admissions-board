import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getFilter } from '../faculty-actions';

import FacultiesFilterForm from '../../../components/filter/filter-forms/faculties-filter-form';
import './filter.css';

class FilterComponent extends React.Component {
    componentDidMount() {
        this.props.getFilter();
    }

    onSubmitClicked = (filter) => {
        console.log(filter);
        // this.props.addFilter(filter);
    };

    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            getFilter: PropTypes.func,
            filter: PropTypes.shape({}),
        };
    }

    render() {
        return (
            <div className="filter-container">
                <FacultiesFilterForm
                    onReportClicked={this.onReportClicked}
                    onSubmit={this.onSubmitClicked}
                    data={this.props.filter}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filter: state.faculty.filter,
});

export default connect(mapStateToProps, { getFilter })(FilterComponent);
