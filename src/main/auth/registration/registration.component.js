import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form.component';
import { register } from '../auth-actions';

import PropTypes from 'prop-types';

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
        };
    }

    onSubmit = data => {
        this.props.register(data);
        this.setState({submitted: true})
    };

    static get propTypes() {
        return {
            register: PropTypes.func,
        }
    };

    render() {
        if (this.state.submitted) return <Redirect to={`/login`} />;

        return (
            <RegistrationForm onSubmit={this.onSubmit}/>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, { register })(RegistrationComponent);
