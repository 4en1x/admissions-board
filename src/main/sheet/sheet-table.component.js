import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import './sheet.css';
import SheetRow from './sheet-row.component';
import SemanticLoader from '../../components/loaders/semantic-loader';
import * as actionCreators from '../faculty/faculty-actions';


class FacultyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        this.props.sheetGetEntrants(this.props.match.params.id);
    }

    static get propTypes() {
        return {
            t: PropTypes.func,
            entrants: PropTypes.arrayOf(PropTypes.shape({})),
            match: PropTypes.shape({
                params: PropTypes.shape({
                    id: PropTypes.string,
                }),
            }),
            sheetGetEntrants: PropTypes.func,
        };
    }

    render() {
        const { t } = this.props;

        if (!this.props.entrants) {
            return <SemanticLoader />;
        }

        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Second Name</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Enrolled / not enrolled</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        this.props.entrants.map(entrant => <SheetRow key={entrant.id} entrant={entrant}/>)
                    }
                </Table.Body>
            </Table>
        );
    }
}

const mapStateToProps = state => ({
    entrants: state.faculty.sheetEntrants,
});

export default connect(mapStateToProps, actionCreators)(translate('common')(FacultyTable));
