import React from "react";
import InputForm from "../components/login-input";
import { Image } from "semantic-ui-react";
import logos from "../../../assets/images";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from '../auth-actions';
import PropTypes from 'prop-types';
import LanguageDropDown from '../../../components/languageDropDown/languageDropDown.component';
import "./sign-in.css";

class SignInComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };
    }

    inputHandle = (username, password) => {
        this.username = username;
        this.password = password;

        this.setState({
            isLoading: true
        });

        this.props.login({ username: this.username, password: this.password });
    };

    static get propTypes() {
        return {
            login: PropTypes.func,
            auth: PropTypes.shape({
                isAuthError: PropTypes.bool
            }),
        }
    };

    render() {
        if (!this.props.auth.isAuthError) {
            return <Redirect to={{pathname: "/"}}/>;
        }

        return (
            <div className="auth-container parent-size">
                <LanguageDropDown/>
                <div className="auth-form">
                    <div className="auth-form-header">
                        <Image src={logos.logo1} height="40px" verticalAlign="bottom" />
                    </div>
                    <InputForm inputHandle={this.inputHandle} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, actionCreators)(SignInComponent);
