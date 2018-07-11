import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

class CabinetPage extends Component {
    static defaultProps = {

    };
    
    static get propTypes() {
        return {
            user: PropTypes.shape({
                name: PropTypes.string,
                role: PropTypes.string
            }),
        }
    };
    
    render() {
        const { t } = this.props;
        
        return (
            <div>
            
            </div>
        );
    }
}

export default translate('common')(CabinetPage);
