import facultyService from '../../service/faculty-service';
import subjectService from '../../service/subject-service'

const ADD_SUBJECT_VALUES = 'ADD_SUBJECT_VALUES';
const ADD_EDIT_FORM_VALUES = 'ADD_EDIT_FORM_VALUES';
const ADD_FILTER_VALUES = 'ADD_FILTER_VALUES';

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

function addFilterValues(data) {
    return {
        type: ADD_FILTER_VALUES,
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

export function getFilter() {
    /*while server down*/

    return dispatch => {
        console.log('lalalala');
        dispatch(addFilterValues({
            statuses: [
                "one",
                "two",
                "three"
            ],
            subjects: [
                "one",
                "two",
                "three",
                "one1",
                "two1",
                "three1",
                "one2",
                "two2",
                "three2"
            ]
        }));
    };

    return dispatch => {
        facultyService.getFilter().then(res => {
            dispatch(addFilterValues(res.data));
        });
    };
}

export function getEditFormValues(id) {
    /*while server down*/
    
    return dispatch => {
        console.log('lalalala');
        dispatch(addEditFormValues({
            id: 2,
            name: 'some name for the faculty',
            subjects: [
                'math','math2','math4'
            ],
            recruitmentPlan: 120,
            requestsSubmitted: 90,
        }));
    };
    
    return dispatch => {
        facultyService.getEditFormValues(id).then(res => {
            dispatch(addEditFormValues(res.data));
        });
    };
}
