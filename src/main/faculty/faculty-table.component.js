import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, Icon, List, Header, Button } from "semantic-ui-react";
import { translate } from 'react-i18next';

import './faculty-table.css';

class FacultyTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faculties: [
                { key: 0, value: '0', name: 'Faculty of Applied Mathematics and Computer Science', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 1, value: '1', name: 'Faculty of Biology',available: false, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 2, value: '2', name: 'Faculty of Radiophysics and Computer Technologies', available: false, subjects: ['Math', 'Geography', 'Belarussian language'] },
                { key: 3, value: '3', name: 'Faculty of Mathematics and Mechanics', available: true, subjects: ['Math', 'Russian language', 'Belarussian language'] },
                { key: 4, value: '4', name: 'Faculty of International relations', available: true, subjects: ['Math', 'Chemistry'] },
                { key: 5, value: '5', name: 'Faculty of History', available: false, subjects: ['Math', 'Chemistry', 'Belarussian language'] },
            ]
        };
    }

    static defaultProps = {
 
    };

    static get propTypes() {
        return {

        }
    };

    render() {
        const { t } = this.props;

        return (
            <div className="content-wide faculty-table" >
                <div className="faculty-tab background padded ">
                    <List divided verticalAlign='middle'>
                        {
                            this.state.faculties.map(item => {
                                return <List.Item key ={item.key}>
                                    {item.available ? (
                                        <List.Content floated='right'>
                                            <Button color='green' >{t("facultyTable.register")}</Button>
                                        </List.Content>
                                    ) : (
                                        <List.Content floated='right'>
                                            <Button color='red' disabled>{t("facultyTable.register")}</Button>
                                        </List.Content>
                                    )}

                                    <Header size='medium' textAlign="left">{item.name}</Header>
                                    <Header as='h5' textAlign="left">{t("facultyTable.reqSubjects")}:</Header>

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
                                </List.Item>
                            })
                        }
                    </List>
                </div>
        
                <Pagination
                    defaultActivePage={5}
                    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                    prevItem={{ content: <Icon name='angle left' />, icon: true }}
                    nextItem={{ content: <Icon name='angle right' />, icon: true }}
                    totalPages={10}
                />
            </div>
        );
    }
}

export default translate('common')(FacultyTable);
