import axios from 'axios';

axios.defaults.withCredentials = true;

function getSubjectsList() {
    return axios.get(`/rest/subjects`);
}

function getEditFormValues(id) {
    return axios.get(`/rest/faculty/${id}`);
}

const interviewService = {
    getSubjectsList,
    getEditFormValues
};

export default interviewService;
