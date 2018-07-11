import React from 'react';
import { connect } from 'react-redux';
/*
import {
  addFilter,
  getFormValues,
} from '../../../faculty/faculty-actions';
*/
import FacultiesFilterForm from '../../../components/filter/filter-forms/faculties-filter-form';
import './filter.css';

class FilterComponent extends React.Component {
    /*
    componentDidMount() {
      this.props.getFormValues();
    }
  */
    onSubmitClicked = filter => {
        console.log(filter);
        console.log(this.props.form);
        //this.props.addFilter(filter);
    };
    
    render() {
        return (
            <div className="filter-container">
                <FacultiesFilterForm
                    onReportClicked={this.onReportClicked}
                    onSubmit={this.onSubmitClicked}
                    data={this.props.formValues}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        formValues: state.formValues || {
            statuses: [
                "one",
                "two",
                "three"
            ],
            subjects: [
                "one",
                "two",
                "three",
                "one1",
                "two1",
                "three1",
                "one2",
                "two2",
                "three2"
            ]
        },
        filter: state.filter,
    };
};

export default connect(mapStateToProps, {
//  addFilter,
//  getFormValues,
// downloadReport,
})(FilterComponent);
