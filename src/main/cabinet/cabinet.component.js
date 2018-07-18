import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { Button, Header, Segment } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import EditEntrant from '../entrant/edit/edit-entrant.component';
import AdminPanel from './admin-panel/admin-panel.component';
import Faculty from '../faculty/faculty.component';
import entrantService from '../../service/entrant-service';


import SemanticLoader from '../../components/loaders/semantic-loader';
import * as actionCreators from '../entrant/entrant-actions';

import roles from '../../configs/roles';
import './cabinet.css';

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
                login: PropTypes.string,
                role: PropTypes.string,
                id: PropTypes.number,
            }),
            t: PropTypes.func,
            subjects: PropTypes.arrayOf(PropTypes.string),
            formValues: PropTypes.shape({}),
            getEntrantFaculty: PropTypes.func,
            entrantFaculty: PropTypes.shape({
                is_Unavailable: PropTypes.bool,
            }),
        };
    }

    onSubmit = (data) => {
        entrantService.editEntrant(data, this.props.user.id);
        this.setState({ submitted: true });
    };

    componentDidMount() {
        this.props.getSubjectsList();
        this.props.getEditFormValues(this.props.user.id);
        this.props.getEntrantFaculty(this.props.user.id);
    }

    unsubscribe = () => {
        entrantService.unsubscribe(this.props.user.id);
        this.setState({ submitted: true });
    };

    render() {
        const { t } = this.props;

        if (this.state.submitted) return <Redirect to={'/'} />;

        if (!this.props.formValues || !this.props.subjects) {
            return <SemanticLoader />;
        }

        return (
            <div>
                {
                    this.props.user.role === roles.ADMIN.ROLE
                        ? <AdminPanel/>
                        : this.props.entrantFaculty
                            ? <div className="entrant-faculty">
                                <Header size='huge' textAlign="center">{t('entrant-faculty.name')}:</Header>
                                <Segment>
                                    <Faculty faculty={this.props.entrantFaculty} role={this.props.user.role}/>
                                </Segment>
                                {
                                    !this.props.entrantFaculty.is_Unavailable ? (
                                        <Button color="google plus" onClick={this.unsubscribe} floated ="right">
                                            {t('entrant-faculty.unsubscribeButton')}
                                        </Button>
                                    ) : (
                                        <Button color="google plus" disabled floated ="right">
                                            {t('entrant-faculty.unsubscribeButton')}
                                        </Button>
                                    )
                                }
                            </div>
                            : null
                }
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

const mapStateToProps = state => ({
    formValues: state.entrant.formValues,
    subjects: state.entrant.subjects,
    user: state.auth,
    entrantFaculty: state.entrant.entrantFaculty,
});

export default translate('common')(connect(mapStateToProps, actionCreators)(CabinetPage));
