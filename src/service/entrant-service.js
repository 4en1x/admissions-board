import axios from 'axios';

axios.defaults.withCredentials = true;

function getEditFormValues(id) {
    return axios.get(`/rest/entrant/${id}`);
}

function editEntrant(data, id) {
    return axios.post(`http://localhost:8081/entrant/edit/${id}`, data);
}

const entrantService = {
    getEditFormValues,
    editEntrant
};

export default entrantService;
