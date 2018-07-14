import axios from 'axios';

axios.defaults.withCredentials = true;

function getSubjectsList() {
    return axios.get(`/rest/subjects`);
}

function getEditFormValues(id) {
    return axios.get(`/rest/faculty/${id}`);
}

function editFaculty(data, id) {
    return axios.post(`/rest/faculty/edit/${id}`, data);
}

const facultyService = {
    getSubjectsList,
    getEditFormValues,
    editFaculty
};

export default facultyService;
