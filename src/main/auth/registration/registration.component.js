import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SemanticLoader from '../../../components/loaders/semantic-loader';
import { Message } from "semantic-ui-react";
import RegistrationForm from './registration-form.component';
import * as actionCreators from '../auth-actions';
import PropTypes from 'prop-types';

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        };
    }
    
    onSubmit = data => {
        console.log(data)
        this.props.register(data);
        this.setState({submitted: true})
    };
    
    
    componentDidMount() {
        //this.props.getFormValues();
    }
    
    static get propTypes() {
        return {
            isFormSubmitted: PropTypes.bool,
            register: PropTypes.func,
        }
    };
    
    data = {
        options: [
            { key: 0, value: '0', text: 'Math' },
            { key: 1, value: '1', text: 'Russian language' },
            { key: 2, value: '2', text: 'Belarussian language' },
            { key: 3, value: '3', text: 'Physics' },
            { key: 4, value: '4', text: 'Chemistry' },
            { key: 5, value: '5', text: 'Geography' },
        ]
    };

    render() {
        if (this.state.submitted) return <Redirect to={`/login`} />;
        //if (!this.props.formValues) return <SemanticLoader />;
        
        return (
            <div>
                <RegistrationForm onSubmit={this.onSubmit} data={this.data} />

                /*{this.state.submitted ? (
                    <Message
                        className="success-container"
                        success
                        header='Your user registration was successful'
                        content='You may now log-in with the username you have chosen'
                    />
                ) :<div></div>}*/
            </div>
            
        );
    }
}

const mapStateToProps = state => ({
    //formValues: state.registration.formValues,
    //isFormSubmitted: state.registration.isFormSubmitted
});

export default connect(mapStateToProps, actionCreators)(RegistrationComponent);
