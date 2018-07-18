import axios from 'axios';

axios.defaults.withCredentials = true;

function getSubjectsList() {
    return axios.get('/rest/subjects');
}

function getEditFormValues(id) {
    return axios.get(`/rest/faculty/${id}`);
}

function getSheet(id) {
    return axios.get(`/rest/faculty/${id}/sheet`);
}

function editFaculty(data, id) {
    return axios.post(`/rest/faculty/edit/${id}`, data);
}

function deleteFaculty(id) {
    return axios.post(`/rest/faculty/delete/${id}`);
}

function registerToFaculty(data) {
    return axios.post('/rest/faculty/register', data);
}

function addFaculty(data) {
    return axios.post('/rest/faculty/add', data);
}

const facultyService = {
    getSubjectsList,
    getEditFormValues,
    editFaculty,
    addFaculty,
    deleteFaculty,
    registerToFaculty,
    getSheet,
};

export default facultyService;
