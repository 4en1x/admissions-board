import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import EditEntrant from '../entrant/edit/edit-entrant.component'
import entrantService from '../../service/entrant-service'

import { connect } from 'react-redux';
import SemanticLoader from '../../components/loaders/semantic-loader';
import * as actionCreators from '../entrant/entrant-actions'

class CabinetPage extends Component {
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
            user: PropTypes.shape({
                name: PropTypes.string,
                role: PropTypes.string,
                id: PropTypes.number,
            }),
            subjects: PropTypes.arrayOf(PropTypes.string),
            formValues: PropTypes.shape({}),
        }
    };

    onSubmit = (data) => {
        entrantService.editEntrant(data, this.props.user.id);
        this.setState({submitted: true})
    };

    componentDidMount() {
        this.props.getSubjectsList();
        this.props.getEditFormValues(this.props.user.id);
    }

    render() {
        if (this.state.submitted) return <Redirect to={`/`} />;

        if (!this.props.formValues || !this.props.subjects) {
            return <SemanticLoader />;
        }

        return (
            <div>
                <EditEntrant
                    onSubmit={this.onSubmit}
                    subjects={this.props.subjects}
                    formValues={this.props.formValues}
                    role={this.props.user.role}
                />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        formValues: state.entrant.formValues,
        subjects: state.entrant.subjects,
        user: state.auth
    };
};

export default connect(mapStateToProps, actionCreators)(CabinetPage);
