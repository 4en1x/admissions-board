import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Pagination,
    Icon, List,
    Button,
    Segment,
} from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import roles from '../../configs/roles';
import './faculty-table.css';
import FacultyFilter from './filter/candidates-filter.container';
import Faculty from './faculty.component';
import facultyService from '../../service/faculty-service';
import { withAlert } from 'react-alert';

class FacultyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faculties: [
                {
                    time: 1222222222, id: 0, key: 0, value: '0', entry_plan: 120, amount_entrant: 300, name: 'Faculty of Applied Mathematics and Computer Science', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 1, key: 1, value: '1', entry_plan: 90, amount_entrant: 101, name: 'Faculty of Biology', is_Unavailable: false, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 2, key: 2, value: '2', entry_plan: 150, amount_entrant: 167, name: 'Faculty of Radiophysics and Computer Technologies', is_Unavailable: false, subjects: ['Math', 'Geography', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 3, key: 3, value: '3', entry_plan: 40, amount_entrant: 20, name: 'Faculty of Mathematics and Mechanics', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 4, key: 4, value: '4', entry_plan: 90, amount_entrant: 130, name: 'Faculty of International relations', is_Unavailable: true, subjects: ['Math', 'Chemistry'],
                },
                {
                    time: 1222222222, id: 5, key: 5, value: '5', entry_plan: 80, amount_entrant: 70, name: 'Faculty of History', is_Unavailable: false, subjects: ['Math', 'Chemistry', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 6, key: 6, value: '6', entry_plan: 120, amount_entrant: 300, name: 'Faculty of Applied Mathematics and Computer Science', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 7, key: 7, value: '7', entry_plan: 90, amount_entrant: 101, name: 'Faculty of Biology', is_Unavailable: false, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 8, key: 8, value: '8', entry_plan: 150, amount_entrant: 167, name: 'Faculty of Radiophysics and Computer Technologies', is_Unavailable: false, subjects: ['Math', 'Geography', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 9, key: 9, value: '9', entry_plan: 40, amount_entrant: 20, name: 'Faculty of Mathematics and Mechanics', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 10, key: 10, value: '10', entry_plan: 90, amount_entrant: 130, name: 'Faculty of International relations', is_Unavailable: true, subjects: ['Math', 'Chemistry'],
                },
                {
                    time: 1222222222, id: 11, key: 11, value: '11', entry_plan: 80, amount_entrant: 70, name: 'Faculty of History', is_Unavailable: false, subjects: ['Math', 'Chemistry', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 12, key: 12, value: '12', entry_plan: 120, amount_entrant: 300, name: 'Faculty of Applied Mathematics and Computer Science', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 13, key: 13, value: '13', entry_plan: 90, amount_entrant: 101, name: 'Faculty of Biology', is_Unavailable: false, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 14, key: 14, value: '14', entry_plan: 150, amount_entrant: 167, name: 'Faculty of Radiophysics and Computer Technologies', is_Unavailable: false, subjects: ['Math', 'Geography', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 15, key: 15, value: '15', entry_plan: 40, amount_entrant: 20, name: 'Faculty of Mathematics and Mechanics', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 16, key: 16, value: '16', entry_plan: 90, amount_entrant: 130, name: 'Faculty of International relations', is_Unavailable: true, subjects: ['Math', 'Chemistry'],
                },
                {
                    time: 1222222222, id: 17, key: 17, value: '17', entry_plan: 80, amount_entrant: 70, name: 'Faculty of History', is_Unavailable: false, subjects: ['Math', 'Chemistry', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 18, key: 18, value: '18', entry_plan: 120, amount_entrant: 300, name: 'Faculty of Applied Mathematics and Computer Science', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 19, key: 19, value: '19', entry_plan: 90, amount_entrant: 101, name: 'Faculty of Biology', is_Unavailable: false, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 20, key: 20, value: '20', entry_plan: 150, amount_entrant: 167, name: 'Faculty of Radiophysics and Computer Technologies', is_Unavailable: false, subjects: ['Math', 'Geography', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 21, key: 21, value: '21', entry_plan: 40, amount_entrant: 20, name: 'Faculty of Mathematics and Mechanics', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 22, key: 22, value: '22', entry_plan: 90, amount_entrant: 130, name: 'Faculty of International relations', is_Unavailable: true, subjects: ['Math', 'Chemistry'],
                },
                {
                    time: 1222222222, id: 23, key: 23, value: '23', entry_plan: 80, amount_entrant: 70, name: 'Faculty of History', is_Unavailable: false, subjects: ['Math', 'Chemistry', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 24, key: 24, value: '24', entry_plan: 120, amount_entrant: 300, name: 'Faculty of Applied Mathematics and Computer Science', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 25, key: 25, value: '25', entry_plan: 90, amount_entrant: 101, name: 'Faculty of Biology', is_Unavailable: false, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 26, key: 26, value: '26', entry_plan: 150, amount_entrant: 167, name: 'Faculty of Radiophysics and Computer Technologies', is_Unavailable: false, subjects: ['Math', 'Geography', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 27, key: 27, value: '27', entry_plan: 40, amount_entrant: 20, name: 'Faculty of Mathematics and Mechanics', is_Unavailable: true, subjects: ['Math', 'Russian language', 'Belarussian language'],
                },
                {
                    time: 1222222222, id: 28, key: 28, value: '28', entry_plan: 90, amount_entrant: 130, name: 'Faculty of International relations', is_Unavailable: true, subjects: ['Math', 'Chemistry'],
                },
                {
                    time: 1222222222, id: 29, key: 29, value: '29', entry_plan: 80, amount_entrant: 70, name: 'Faculty of History', is_Unavailable: false, subjects: ['Math', 'Chemistry', 'Belarussian language'],
                },
            ],
            pager: {
                totalItems: 30,
                currentPage: 1,
                pageSize: 10,
                totalPages: 3,

                startIndex: 0,
                endIndex: 9,

            },
            editPageClicked: false,
            editPageClickedId: 0,
            sheetPageClicked: false,
            sheetPageClickedId: 0,
            prev: '0',
        };
    }

    static get propTypes() {
        return {
            role: PropTypes.string,
            id: PropTypes.number,
            t: PropTypes.func,
            alert: PropTypes.shape({
                error: PropTypes.func,
                success: PropTypes.func,
            }),
        };
    }

    onEditPageClick = id => this.setState({ editPageClickedId: id, editPageClicked: true });

    onSheetClick = id => this.setState({ sheetPageClickedId: id, sheetPageClicked: true });

    onElementClick = obj => this.setPager(obj.activePage);

    onDeleteElementClick = id => facultyService.deleteFaculty(id);

    onFacultyRegister = (id) => {
        facultyService.registerToFaculty(
            {
                entrant_id: this.props.id,
                faculty_id: id,
            },
        ).then(
            (data) => { this.props.alert.success(data.toString()); },
            (error) => { this.props.alert.error(error.toString()); },
        );
    };

    setPager = (currentPage) => {
        const newPager = {
            currentPage,
            startIndex: (this.state.pager.currentPage - 1) * this.state.pager.pageSize,
            endIndex: this.state.pager.currentPage * this.state.pager.pageSize - 1,
            totalPages: 3,
            totalItems: 30,
            pageSize: 10,
        };

        this.setState({ pager: newPager });
    };

    render() {
        const { t } = this.props;

        if (this.state.editPageClicked) {
            return <Redirect to={`/faculties/edit/${this.state.editPageClickedId}`} />;
        }

        if (this.state.sheetPageClicked) {
            return <Redirect to={`/faculties/${this.state.sheetPageClickedId}/sheet`} />;
        }

        let mainClassName = 'content-all';
        if (this.props.role === roles.ADMIN.ROLE) {
            mainClassName = 'content-wide';
        }

        return (
            <div>
                {
                    this.props.role === roles.ADMIN.ROLE ? (
                        <div className="content-thin">
                            <FacultyFilter/>
                        </div>
                    ) : null
                }

                <div className={mainClassName} >
                    <div className="faculty-tab background padded ">
                        <List verticalAlign='middle'>
                            {
                                this.state.faculties.slice(this.state.pager.startIndex, this.state.pager.endIndex)
                                    .map(item => <List.Item key ={item.key}>
                                        <Segment>
                                            {this.props.role === roles.ADMIN.ROLE ? (item.is_Unavailable ? (
                                                <List.Content floated='right'>
                                                    <Button color='yellow' disabled>
                                                        {t('faculty.table.getSheet')}
                                                    </Button>
                                                </List.Content>
                                            ) : (
                                                <List.Content floated='right'>
                                                    <Button onClick={() => this.onSheetClick(item.id)} color='yellow' >
                                                        {t('faculty.table.getSheet')}
                                                    </Button>
                                                </List.Content>
                                            )) : item.is_Unavailable ? (
                                                <List.Content floated='right'>
                                                    <Button color='red' disabled>
                                                        {t('faculty.table.register')}
                                                    </Button>
                                                </List.Content>
                                            ) : (
                                                <List.Content floated='right'>
                                                    <Button
                                                        onClick={() => this.onFacultyRegister(item.id)}
                                                        color='green'
                                                    >
                                                        {t('faculty.table.register')}
                                                    </Button>
                                                </List.Content>
                                            )}

                                            <Faculty
                                                faculty={item}
                                                role={this.props.role}
                                                onEditPageClick={this.onEditPageClick}
                                                onDeleteElementClick={this.onDeleteElementClick}
                                            />
                                        </Segment>
                                    </List.Item>)
                            }
                        </List>
                    </div>
                    <div className="faculty-pagination">
                        <Segment>
                            <Pagination
                                defaultActivePage={1}
                                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                                nextItem={{ content: <Icon name='angle right' />, icon: true }}
                                totalPages={3}
                                onPageChange={(event, obj) => this.onElementClick(obj)}
                            />
                        </Segment>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    role: state.auth.role,
    id: state.auth.id,
});

export default withAlert(connect(mapStateToProps)(translate('common')(FacultyTable)));
