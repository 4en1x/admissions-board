import React from "react";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown, Icon, Modal, Button, Flag } from 'semantic-ui-react';
import { translate } from 'react-i18next';

const trigger = name =>
    <span>
        <Icon name="user" />
        {name}
    </span>;

class DropDownTrigger extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal_language: false,
            options:[
                { value: 'select-language', text: this.props.t("dropDownMenu.selectLan") },
                { value: 'sign-out', text: this.props.t("dropDownMenu.signOut") },
                { value: 'cabinet', text: this.props.t("dropDownMenu.cabinet") }
            ],
            cabinet: false,
        }
    }

    triggerDropDown = (event, value) => {
        if (value.value === 'sign-out') {
            this.props.itemSelected(event, value);
        }

        if (value.value === 'select-language') {
            this.setState({modal_language: true});
        }

        if (value.value === 'cabinet') {
            this.setState({cabinet: true});
        }
    };

    onClose = () => this.setState({
        modal_language: false,
        options:[
            { value: 'select-language', text: this.props.t("dropDownMenu.selectLan") },
            { value: 'sign-out', text: this.props.t("dropDownMenu.signOut") },
            { value: 'cabinet', text: this.props.t("dropDownMenu.cabinet") }
        ]
    });

    static get propTypes() {
        return {
            user: PropTypes.shape({
                name: PropTypes.string,
                surname: PropTypes.string
            }),
            itemSelected: PropTypes.func,
            i18n : PropTypes.shape({}),
            t : PropTypes.func,
        }
    };

    render() {
        const { t, i18n } = this.props;
    
        if (this.state.cabinet) {
            this.setState({cabinet: false});
            return <Redirect to={`/cabinet`} />;
        }

        return (
            <div>
                <Dropdown
                    trigger={trigger(this.props.user.name)}
                    onChange={this.triggerDropDown}
                    options={this.state.options}
                />

                <Modal open={this.state.modal_language}>
                    <Modal.Header>{t("dropDownMenu.selectLan")}</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Flag name='de' onClick={() => i18n.changeLanguage('de')}>de</Flag>
                            <Flag name='gb' onClick={() => i18n.changeLanguage('en')}>en</Flag>
                            <Flag name='cn' onClick={() => i18n.changeLanguage('cn')}>cn</Flag>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.onClose} negative>
                            {t("dropDownMenu.closeBtn")}
                        </Button>
                    </Modal.Actions>
                </Modal>
                
            </div>
        );
    }
}

export default translate('common')(DropDownTrigger);
