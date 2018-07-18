import subjectService from '../../service/subject-service'
import entrantService from '../../service/entrant-service'

const ADD_SUBJECT_VALUES = 'ADD_SUBJECT_VALUES';
const ADD_EDIT_FORM_VALUES = 'ADD_EDIT_FORM_VALUES';
const GET_ENTRANT_FACULTY = 'GET_ENTRANT_FACULTY';

function addSubjectsValues(subjects) {
    return {
        type: ADD_SUBJECT_VALUES,
        subjects
    };
}

function addEntrantFacultyValues(faculty) {
    return {
        type: GET_ENTRANT_FACULTY,
        faculty
    };
}

function addEditFormValues(data) {
    return {
        type: ADD_EDIT_FORM_VALUES,
        data
    };
}

export function getEntrantFaculty(id) {
    /*while server down*/
    
    return dispatch => {
        console.log('lalalala');
        dispatch(addEntrantFacultyValues({
            time: 1222222222,
            id: 0,
            entry_plan:120,
            amount_entrant:300,
            name: 'Faculty of Applied Mathematics and Computer Science',
            is_Unavailable: true,
            subjects: ['Math', 'Russian language', 'Belarussian language']
        }));
    };
    
    return dispatch => {
        entrantService.getEntrantFaculty(id).then(
            res => dispatch(addEntrantFacultyValues(res.data)),
            () =>  dispatch(addEntrantFacultyValues(null)));
    };
}

export function getSubjectsList() {
    /*while server down*/

    return dispatch => {
        console.log('lalalala');
        dispatch(addSubjectsValues(['math','math2','math3','math4','math5','math6']));
    };

    return dispatch => {
        subjectService.getSubjectsList().then(res => {
            dispatch(addSubjectsValues(res.data));
        });
    };
}

export function getEditFormValues(id) {
    /*while server down*/

    return dispatch => {
        console.log('lalalala');
        dispatch(addEditFormValues({
            certificate: 100,
            first_name: 'some name',
            surname: 'some surname',
            login: 'user',
            email: "my@mail",
            marks: [
                {subject: 'math', value: 45},
                {subject: 'math2', value: 49},
                {subject: 'math3', value: 74}
            ]
        }));
    };

    return dispatch => {
        entrantService.getEditFormValues(id).then(res => {
            dispatch(addEditFormValues(res.data));
        });
    };
}
