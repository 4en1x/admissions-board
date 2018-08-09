import axios from 'axios';

axios.defaults.withCredentials = true;

function getSubjectsList() {
    return axios.get('http://localhost:8888/subjects');
}

function getEditFormValues(id) {
    return axios.get(`http://localhost:8888/faculty/${id}`);
}

function getSheet(id) {
    return axios.get(`http://localhost:8888/faculty/${id}/sheet`);
}

function editFaculty(data, id) {
    return axios.post(`http://localhost:8888/faculty/edit/${id}`, data);
}

function deleteFaculty(id) {
    return axios.post(`http://localhost:8888/faculty/delete/${id}`);
}

function registerToFaculty(data) {
    return axios.post('http://localhost:8888/faculty/register', data);
}

function addFaculty(data) {
    return axios.post('http://localhost:8888/faculty/add', data);
}

function getFaculty(page = 1, filter = {}) {
    return axios.post('http://localhost:8888/faculty', {
        page,
        filter,
    });
}

const facultyService = {
    getSubjectsList,
    getEditFormValues,
    editFaculty,
    addFaculty,
    deleteFaculty,
    registerToFaculty,
    getSheet,
    getFaculty,
};

export default facultyService;
