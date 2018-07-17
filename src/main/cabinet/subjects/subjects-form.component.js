import React from "react";
import { Form, Button, Header, Icon, Popup, Input} from "semantic-ui-react";
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import "./subjects.css";

class EditSubjectsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submit: false,
            subjects: this.prepareDataForDropDown(this.props.subjects),
            oldSubjects: this.prepareDataForDropDown(this.props.subjects),
        };
    }

    static get propTypes() {
        return {
            onSubmit: PropTypes.func,
            t: PropTypes.func,
            subjects: PropTypes.arrayOf(PropTypes.string),
        }
    };

    prepareDataForDropDown = (data) => {
        if (!data) {
            return [];
        }

        return data.map((item, index) => {return {key: index, value: index, text: item, color: "red", content: "delete"}})
    };

    prepareData = () => {
        if(!this.state.submit) {
            return;
        }

        let data = {
            add: [],
            edit: [],
            delete: [],
        };

        this.state.subjects.forEach(subject => {
            const index = this.state.oldSubjects.findIndex(oldSubject => oldSubject.key === subject.key);

            if (index === -1 && subject.content === "delete") {
                data.add.push(subject.text)
            }
            else if (subject.content === "add") {
                data.delete.push(this.state.oldSubjects[index].text)
            }
            else if (subject.text !== this.state.oldSubjects[index].text) {
                data.edit.push({
                    old: this.state.oldSubjects[index].text,
                    new: subject.text
                })
            }
        });

        this.setState({submit: true});
        this.props.onSubmit(data);
    };

    onChange = (key, newValue) => {
        const index = this.state.subjects.findIndex(subject => subject.key === key);
        let newSubjects = this.state.subjects;
        newSubjects[index].text = newValue;
        this.setState({subjects : newSubjects});
    };

    onSubmit = () => this.setState({submit: true});

    disable = (key) => {
        const index = this.state.subjects.findIndex(subject => subject.key === key);
        let newSubjects = this.state.subjects;

        if (this.state.subjects[index].content === "delete") {
            newSubjects[index].content = "add";
            newSubjects[index].color = "green";
        }
        else {
            newSubjects[index].content = "delete";
            newSubjects[index].color = "red";
        }

        this.setState({subjects : newSubjects});
    };

    onAddNewItem = () => {
        let newSubjects = this.state.subjects;

        newSubjects.push({
            key: newSubjects[newSubjects.length - 1].key + 1,
            value: newSubjects[newSubjects.length - 1].key + 1,
            text: "some subject",
            color: "red",
            content: "delete"
        });

        this.setState({subjects : newSubjects});
    };

    render() {
        const { t } = this.props;

        return (
            <div className="registration-container parent-size">
                <div className="registration-form">
                    <Form size="large" onSubmit={this.prepareData}>
                        <Header size='huge' textAlign="center">{t("subjects-edit.name")}</Header>
                        {
                            this.state.subjects.map(item => {
                                return <div className = "fullWidth" key ={item.key}>
                                    <Button.Group className = "fullWidth">
                                        <Popup
                                            trigger={
                                                <Button
                                                    type="button"
                                                    content={`Change name for: ${item.text}`}
                                                    color= "green"
                                                />}
                                            content={
                                                <Input
                                                    defaultValue={item.text}
                                                    onChange={event =>this.onChange(item.key, event.target.value)}
                                                />
                                            }
                                            on='click'
                                            position='top right'
                                        />
                                        <Button.Or />
                                        <Button
                                            color= {item.color}
                                            content={item.content}
                                            onClick={ ()=>this.disable(item.key)}
                                        />
                                    </Button.Group>
                                </div>
                            })
                        }

                        <Button color="google plus" onClick={this.onSubmit} type="submit" floated ="right">
                            <Icon name='checkmark' /> {t("subjects-edit.submitButton")}
                        </Button>

                        <Button color="blue" onClick={this.onAddNewItem} floated ="right">
                            <Icon name='plus' /> {t("subjects-edit.addButton")}
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default reduxForm({ form: "EditSubjectsForm" })(translate('common')(EditSubjectsForm));
