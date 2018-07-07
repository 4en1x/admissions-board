import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthorized } from './auth-actions';
import SemanticLoader from '../../components/loaders/semantic-loader';
import PropTypes from 'prop-types';

export default function checkAuth(Component) {
    class Authorization extends React.Component {
        componentDidMount() {
            if (this.props.auth.isAuthError) {
                this.props.isAuthorized()
            }
        }

        static get propTypes() {
            return {
                isAuthorized: PropTypes.func,
                auth: PropTypes.shape({
                    isAuthError: PropTypes.bool
                }),
            }
        };

        render() {
            const user = this.props.auth;
            if (user.tryLoginWithCookies) return <SemanticLoader/>;
            if (user.isAuthError) return <Redirect to="/login" />;
            return <Component {...this.props} user={user} />;
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.auth
        };
    }

    return connect(mapStateToProps, { isAuthorized })(Authorization);
}
