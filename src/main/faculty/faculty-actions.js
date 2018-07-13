import facultyService from '../../service/faculty-service';

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
        console.log('lalalala');
        facultyService.getSubjectsList().then(res => {
            dispatch(addSubjectsValues(res.data));
        });
    };
}

export function getEditFormValues() {
    /*while server down*/
    
    return dispatch => {
        console.log('lalalala');
        dispatch(addEditFormValues({
            name: 'some name for the faculty',
            subjects: [
                'math','math2','math4'
            ]
        }));
    };
    
    return dispatch => {
        console.log('lalalala');
        facultyService.getEditFormValues().then(res => {
            dispatch(addEditFormValues(res.data));
        });
    };
}
