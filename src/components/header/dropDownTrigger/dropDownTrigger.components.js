import React from "react";
import PropTypes from 'prop-types';
import { Dropdown, Icon } from 'semantic-ui-react';

const trigger = name =>
    <span>
        <Icon name="user" />
        {name}
    </span>;

const options = [
    { value: 'something else', text: 'something else' },
    { value: 'sign-out', text: 'Sign Out' }
];

export default class DropDownTrigger extends React.Component {
    logoutAndNotification = (event, value) => {
        if (value.value === 'sign-out') {
            this.props.itemSelected(event, value);
        }
    };

    static defaultProps = {
        user: {}
    };

    static get propTypes() {
        return {
            user: PropTypes.shape({
                name: PropTypes.string,
                surname: PropTypes.string
            }),
            itemSelected: PropTypes.func
        }
    };

    render() {
        return (
            <Dropdown
                trigger={trigger(this.props.user.name)}
                onChange={this.logoutAndNotification}
                options={options}
            />
        );
    }
}
