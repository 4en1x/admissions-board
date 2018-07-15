import axios from 'axios';

axios.defaults.withCredentials = true;

function getSubjectsList() {
    return axios.get(`/rest/subjects`);
}


const subjectService = {
    getSubjectsList,
};

export default subjectService;