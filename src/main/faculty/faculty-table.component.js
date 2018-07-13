import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, Icon, List, Header, Button, Divider, Segment, Label } from "semantic-ui-react";
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import roles from '../../configs/roles'
import './faculty-table.css';
import FacultyFilter from './filter/candidates-filter.container';

class FacultyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faculties: [
                { key: 0, value: '0', recruitmentPlan:120,requestsSubmitted:300, name: 'Faculty of Applied Mathematics and Computer Science', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 1, value: '1', recruitmentPlan:90,requestsSubmitted:101,name: 'Faculty of Biology',available: false, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 2, value: '2', recruitmentPlan:150,requestsSubmitted:167,name: 'Faculty of Radiophysics and Computer Technologies', available: false, subjects: ['Math', 'Geography', 'Belarussian language'] },
                { key: 3, value: '3', recruitmentPlan:40,requestsSubmitted:20,name: 'Faculty of Mathematics and Mechanics', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 4, value: '4', recruitmentPlan:90,requestsSubmitted:130,name: 'Faculty of International relations', available: true, subjects: ['Math', 'Chemistry'] },
                { key: 5, value: '5', recruitmentPlan:80,requestsSubmitted:70,name: 'Faculty of History', available: false, subjects: ['Math', 'Chemistry', 'Belarussian language'] },
                { key: 6, value: '6', recruitmentPlan:120,requestsSubmitted:300, name: 'Faculty of Applied Mathematics and Computer Science', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 7, value: '7', recruitmentPlan:90,requestsSubmitted:101,name: 'Faculty of Biology',available: false, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 8, value: '8', recruitmentPlan:150,requestsSubmitted:167,name: 'Faculty of Radiophysics and Computer Technologies', available: false, subjects: ['Math', 'Geography', 'Belarussian language'] },
                { key: 9, value: '9', recruitmentPlan:40,requestsSubmitted:20,name: 'Faculty of Mathematics and Mechanics', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 10, value: '10', recruitmentPlan:90,requestsSubmitted:130,name: 'Faculty of International relations', available: true, subjects: ['Math', 'Chemistry'] },
                { key: 11, value: '11', recruitmentPlan:80,requestsSubmitted:70,name: 'Faculty of History', available: false, subjects: ['Math', 'Chemistry', 'Belarussian language'] },
                { key: 12, value: '12', recruitmentPlan:120,requestsSubmitted:300, name: 'Faculty of Applied Mathematics and Computer Science', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 13, value: '13', recruitmentPlan:90,requestsSubmitted:101,name: 'Faculty of Biology',available: false, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 14, value: '14', recruitmentPlan:150,requestsSubmitted:167,name: 'Faculty of Radiophysics and Computer Technologies', available: false, subjects: ['Math', 'Geography', 'Belarussian language'] },
                { key: 15, value: '15', recruitmentPlan:40,requestsSubmitted:20,name: 'Faculty of Mathematics and Mechanics', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 16, value: '16', recruitmentPlan:90,requestsSubmitted:130,name: 'Faculty of International relations', available: true, subjects: ['Math', 'Chemistry'] },
                { key: 17, value: '17', recruitmentPlan:80,requestsSubmitted:70,name: 'Faculty of History', available: false, subjects: ['Math', 'Chemistry', 'Belarussian language'] },
                { key: 18, value: '18', recruitmentPlan:120,requestsSubmitted:300, name: 'Faculty of Applied Mathematics and Computer Science', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 19, value: '19', recruitmentPlan:90,requestsSubmitted:101,name: 'Faculty of Biology',available: false, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 20, value: '20', recruitmentPlan:150,requestsSubmitted:167,name: 'Faculty of Radiophysics and Computer Technologies', available: false, subjects: ['Math', 'Geography', 'Belarussian language'] },
                { key: 21, value: '21', recruitmentPlan:40,requestsSubmitted:20,name: 'Faculty of Mathematics and Mechanics', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 22, value: '22', recruitmentPlan:90,requestsSubmitted:130,name: 'Faculty of International relations', available: true, subjects: ['Math', 'Chemistry'] },
                { key: 23, value: '23', recruitmentPlan:80,requestsSubmitted:70,name: 'Faculty of History', available: false, subjects: ['Math', 'Chemistry', 'Belarussian language'] },
                { key: 24, value: '24', recruitmentPlan:120,requestsSubmitted:300, name: 'Faculty of Applied Mathematics and Computer Science', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 25, value: '25', recruitmentPlan:90,requestsSubmitted:101,name: 'Faculty of Biology',available: false, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 26, value: '26', recruitmentPlan:150,requestsSubmitted:167,name: 'Faculty of Radiophysics and Computer Technologies', available: false, subjects: ['Math', 'Geography', 'Belarussian language'] },
                { key: 27, value: '27', recruitmentPlan:40,requestsSubmitted:20,name: 'Faculty of Mathematics and Mechanics', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 28, value: '28', recruitmentPlan:90,requestsSubmitted:130,name: 'Faculty of International relations', available: true, subjects: ['Math', 'Chemistry'] },
                { key: 29, value: '29', recruitmentPlan:80,requestsSubmitted:70,name: 'Faculty of History', available: false, subjects: ['Math', 'Chemistry', 'Belarussian language'] },
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
            prev: '0'
        };
    }

    static get propTypes() {
        return {
            role: PropTypes.string,
            t : PropTypes.func,
        }
    };

    onEditPageClick = () => this.setState({editPageClicked: true});
    onElementClick = (obj) => this.setPager(obj.activePage);

    setPager = (currentPage) => {
        let newPager = {
            currentPage,
            startIndex: (this.state.pager.currentPage - 1) * this.state.pager.pageSize,
            endIndex: this.state.pager.currentPage * this.state.pager.pageSize - 1,
            totalPages: 3,
            totalItems: 30,
            pageSize: 10,
        };

        this.setState({pager: newPager});
    };

    render() {
        const { t } = this.props;

        if (this.state.editPageClicked) {
            return <Redirect to={`/faculties/edit/0`} />
        }

        return (
            <div>
                <div className="content-thin">
                    <FacultyFilter />
                </div>
                <div className="content-wide" >
                    <div className="faculty-tab background padded ">
                        <List verticalAlign='middle'>
                            {
                                this.state.faculties.slice(this.state.pager.startIndex, this.state.pager.endIndex).map(item => {
                                    return <List.Item key ={item.key}>
                                        <Segment>
                                            {item.available ? (
                                                <List.Content floated='right'>
                                                    <Button color='green' >{t("faculty.table.register")}</Button>
                                                </List.Content>
                                            ) : (
                                                <List.Content floated='right'>
                                                    <Button color='red' disabled>{t("faculty.table.register")}</Button>
                                                </List.Content>
                                            )}

                                            <Header size='medium' textAlign="left">{item.name}</Header>
                                            <Header as='h5' textAlign="left">{t("faculty.table.reqSubjects")}:</Header>

                                            <List>
                                                {
                                                    this.state.faculties[item.key].subjects.map(subject => {
                                                        return <List.Item key ={subject}>
                                                            <List.Icon name='marker' />
                                                            <List.Content>
                                                                <List.Header>{subject}</List.Header>
                                                            </List.Content>
                                                        </List.Item>
                                                    })
                                                }
                                            </List>

                                            <Divider section />
                                
                                            <Header className="countTable" as='h4' color='green'>
                                                {t("faculty.table.recruitmentPlan")} <Label  circular>{item.recruitmentPlan}</Label>
                                            </Header>
                                
                                            <Header className="countTable" as='h4' color='red'>
                                                {t("faculty.table.requestsSubmitted")} <Label  circular>{item.requestsSubmitted}</Label>
                                            </Header>

                                            {
                                                this.props.role === roles.ADMIN.ROLE ? (
                                                    <List.Content floated='right'>
                                                        <Icon onClick={this.onEditPageClick} name="edit" size="large" color="green"/>
                                                        <Icon name="delete" size="large" color="red"/>
                                                    </List.Content>
                                                ) : null
                                            }
                                        </Segment>
                                    </List.Item>
                                })
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

const mapStateToProps = state => {
    return {
        role: state.auth.role
    };
};

export default connect(mapStateToProps)(translate('common')(FacultyTable));
