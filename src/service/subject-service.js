import axios from 'axios';

axios.defaults.withCredentials = true;

function getSubjectsList() {
    return axios.get('/rest/subjects');
}

function editSubjects(data) {
    return axios.post('/rest/subjects', data);
}

const subjectService = {
    getSubjectsList,
    editSubjects,
};

export default subjectService;
