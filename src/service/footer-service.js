import axios from 'axios';

function getFooter() {
    return axios.get('http://localhost:8888/footer');
}

const footerService = {
    getFooter,
};

export default footerService;
