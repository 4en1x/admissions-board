import React from 'react';
import PropTypes from 'prop-types';
import { withAlert } from 'react-alert';
import footerService from '../../service/footer-service';
import SemanticLoader from '../loaders/semantic-loader';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            footerHtml: undefined,
        };
    }

    componentDidMount() {
        footerService.getFooter().then(
            (result) => {
                this.setState({ footerHtml: result.data });
            },
            (error) => { this.props.alert.error(error.toString()); },
        );
    }

    static get propTypes() {
        return {
            alert: PropTypes.shape({
                error: PropTypes.func,
                success: PropTypes.func,
            }),
        };
    }

    render() {
        if (!this.state.footerHtml) {
            return <SemanticLoader />;
        }

        return (
            <div
                className="FooterContainer"
                dangerouslySetInnerHTML={{ __html: this.state.footerHtml }}>
            </div>
        );
    }
}

export default withAlert(Footer);
