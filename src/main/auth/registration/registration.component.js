import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import RegistrationForm from './registration-form.component';
import { register } from '../auth-actions';


class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
        };
    }

    onSubmit = (data) => {
        this.props.register(data);
        this.setState({ submitted: true });
    };

    static get propTypes() {
        return {
            register: PropTypes.func,
        };
    }

    render() {
        if (this.state.submitted) return <Redirect to={'/login'} />;

        return (
            <RegistrationForm onSubmit={this.onSubmit}/>
        );
    }
}

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, { register })(RegistrationComponent);
