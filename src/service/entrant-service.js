import axios from 'axios';

axios.defaults.withCredentials = true;

function getEditFormValues() {
    return axios.get('http://localhost:8888/entrant');
}

function getEntrantFaculty() {
    return axios.get('http://localhost:8888/entrant/faculty');
}

function unsubscribe() {
    return axios.get('http://localhost:8888/entrant/unsubscribe');
}

function editEntrant(data) {
    return axios.post('http://localhost:8888/entrant/edit', data);
}

const entrantService = {
    getEditFormValues,
    editEntrant,
    getEntrantFaculty,
    unsubscribe,
};

export default entrantService;
