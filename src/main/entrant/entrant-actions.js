import subjectService from '../../service/subject-service';
import entrantService from '../../service/entrant-service';

const ADD_SUBJECT_VALUES = 'ADD_SUBJECT_VALUES';
const ADD_EDIT_FORM_VALUES = 'ADD_EDIT_FORM_VALUES';
const GET_ENTRANT_FACULTY = 'GET_ENTRANT_FACULTY';

function addSubjectsValues(data) {
    let { subjects } = data;
    subjects = subjects.map(subject => subject.name);

    return {
        type: ADD_SUBJECT_VALUES,
        subjects,
    };
}

function addEntrantFacultyValues(faculty) {
    return {
        type: GET_ENTRANT_FACULTY,
        faculty,
    };
}

function addEditFormValues(data) {
    return {
        type: ADD_EDIT_FORM_VALUES,
        data,
    };
}

export function getEntrantFaculty(id) {
    /* while server down */

    return (dispatch) => {
        console.log('lalalala');
        dispatch(addEntrantFacultyValues({
            time: 1222222222,
            id: 0,
            entry_plan: 120,
            amount_entrant: 300,
            name: 'Faculty of Applied Mathematics and Computer Science',
            is_Unavailable: true,
            subjects: ['Math', 'Russian language', 'Belarussian language'],
        }));
    };

    return (dispatch) => {
        entrantService.getEntrantFaculty(id).then(
            res => dispatch(addEntrantFacultyValues(res.data)),
            () => dispatch(addEntrantFacultyValues(null)),
        );
    };
}

export function getSubjectsList() {
    /* while server down */

    return (dispatch) => {
        console.log('lalalala');
        dispatch(addSubjectsValues({
            subjects: [
                { id: 1, name: 'math' },
                { id: 1, name: 'math2' },
                { id: 1, name: 'math3' },
                { id: 1, name: 'math4' },
                { id: 1, name: 'math5' },
                { id: 1, name: 'math6' },
            ],
        }));
    };

    return (dispatch) => {
        subjectService.getSubjectsList().then((res) => {
            dispatch(addSubjectsValues(res.data));
        });
    };
}

export function getEditFormValues(id) {
    /* while server down */

    return (dispatch) => {
        console.log('lalalala');
        dispatch(addEditFormValues({
            certificate: 100,
            first_name: 'some name',
            surname: 'some surname',
            login: 'user',
            email: 'my@mail',
            marks: [
                { subject: 'math', value: 45 },
                { subject: 'math2', value: 49 },
                { subject: 'math3', value: 74 },
            ],
        }));
    };

    return (dispatch) => {
        entrantService.getEditFormValues(id).then((res) => {
            dispatch(addEditFormValues(res.data));
        });
    };
}
