import facultyService from '../../service/faculty-service';
import subjectService from '../../service/subject-service';

const ADD_SUBJECT_VALUES = 'ADD_SUBJECT_VALUES';
const ADD_EDIT_FORM_VALUES_FACULTY = 'ADD_EDIT_FORM_VALUES_FACULTY';
const ADD_ENTRANT_SHEET_VALUES = 'ADD_ENTRANT_SHEET_VALUES';
const GET_FACULTIES = 'GET_FACULTIES';

function addSubjectsValues(data) {
    let { subjects } = data;
    subjects = subjects.map(subject => subject.name);

    return {
        type: ADD_SUBJECT_VALUES,
        subjects,
    };
}

function addEntrantSheetValues(data) {
    return {
        type: ADD_ENTRANT_SHEET_VALUES,
        data,
    };
}

function addEditFormValues(data) {
    return {
        type: ADD_EDIT_FORM_VALUES_FACULTY,
        data,
    };
}

function addFacultyValues(data) {
    return {
        type: GET_FACULTIES,
        data,
    };
}

export function getSubjectsList() {
    return (dispatch) => {
        subjectService.getSubjectsList().then((res) => {
            dispatch(addSubjectsValues(res.data));
        });
    };
}

export function sheetGetEntrants(id) {
    return (dispatch) => {
        facultyService.getSheet(id).then((res) => {
            dispatch(addEntrantSheetValues(res.data));
        });
    };
}

export function getEditFormValues(id) {
    return (dispatch) => {
        facultyService.getEditFormValues(id).then(res => dispatch(addEditFormValues(res.data)));
    };
}


export function getFaculties(page = 1, filter) {
    return (dispatch) => {
        facultyService.getFaculty(page, filter).then(res => dispatch(addFacultyValues(res.data)));
    };
}
