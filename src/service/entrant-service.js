import axios from 'axios';

axios.defaults.withCredentials = true;

function getEditFormValues(id) {
    return axios.get(`http://localhost:8888/committee/entrant/${id}`);
}

function getEntrantFaculty(id) {
    return axios.get(`http://localhost:8888/committee/entrant/${id}/faculty`);
}

function unsubscribe(id) {
    return axios.get(`http://localhost:8888/committee/entrant/${id}/unsubscribe`);
}

function editEntrant(data, id) {
    return axios.post(`http://localhost:8888/committee/entrant/edit/${id}`, data);
}

const entrantService = {
    getEditFormValues,
    editEntrant,
    getEntrantFaculty,
    unsubscribe,
};

export default entrantService;
