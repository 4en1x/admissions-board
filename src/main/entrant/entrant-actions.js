import subjectService from '../../service/subject-service'
import entrantService from '../../service/entrant-service'

const ADD_SUBJECT_VALUES = 'ADD_SUBJECT_VALUES';
const ADD_EDIT_FORM_VALUES = 'ADD_EDIT_FORM_VALUES';

function addSubjectsValues(subjects) {
    return {
        type: ADD_SUBJECT_VALUES,
        subjects
    };
}

function addEditFormValues(data) {
    return {
        type: ADD_EDIT_FORM_VALUES,
        data
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
            averageRating: 34,
            name: 'some name',
            surname: 'some surname',
            username: 'user',
            email: "my@mail",
            subjects: [
                {subject: 'math', rating: 45},
                {subject: 'math2', rating: 49},
                {subject: 'math3', rating: 74}
            ]
        }));
    };

    return dispatch => {
        entrantService.getEditFormValues(id).then(res => {
            dispatch(addEditFormValues(res.data));
        });
    };
}
