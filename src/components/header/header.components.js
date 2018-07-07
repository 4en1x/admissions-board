import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image, Dropdown, Icon } from 'semantic-ui-react';

import images from '../../assets/images';
import './header.css';

const trigger = name =>
  <span>
    <Icon name="user" /> {name}
  </span>;

const options = [
  { value: 'something else', text: 'something else' },
  { value: 'sign-out', text: 'Sign Out' }
];

class DropDownTrigger extends React.Component {
  logoutAndNotification = (event, value) => {
    if (value.value === 'sign-out') {
      this.props.itemSelected(event, value);
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

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }


  render() {
    const user = this.props.user;
    return (
      <div className="header-component">
        <div className="header-content">
          <div className="header-content-left">
            <Link to="/" className="logo-container">
              <Image className="logo" src={images.logo1} />
            </Link>
          </div>
          <DropDownTrigger user={user} itemSelected={this.props.itemSelected} />
        </div>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
  user: {}
};

HeaderComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string
  })
};
