import facultyService from '../../service/faculty-service';
import subjectService from '../../service/subject-service';

const ADD_SUBJECT_VALUES = 'ADD_SUBJECT_VALUES';
const ADD_EDIT_FORM_VALUES_FACULTY = 'ADD_EDIT_FORM_VALUES_FACULTY';
const ADD_FILTER_VALUES = 'ADD_FILTER_VALUES';
const ADD_ENTRANT_SHEET_VALUES = 'ADD_ENTRANT_SHEET_VALUES';

function addSubjectsValues(subjects) {
    return {
        type: ADD_SUBJECT_VALUES,
        subjects
    };
}

function addEntrantSheetValues(data) {
    return {
        type: ADD_ENTRANT_SHEET_VALUES,
        data
    };
}

function addEditFormValues(data) {
    return {
        type: ADD_EDIT_FORM_VALUES_FACULTY,
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

export function sheetGetEntrants(id) {
    /*while server down*/
    
    return dispatch => {
        console.log('lalalala');
        dispatch(addEntrantSheetValues([
            {
                id:1,
                email: "1@email.com",
                login: "user 1",
                first_name: "First Name 1",
                surname: "Second Name 1",
                score: 309,
                enrolled: true
            },
            {
                id:2,
                email: "2@email.com",
                login: "user 2",
                first_name: "First Name 2",
                surname: "Second Name 2",
                score: 308,
                enrolled: true
            },
            {
                id:3,
                email: "3@email.com",
                login: "user 3",
                first_name: "First Name 3",
                surname: "Second Name 3",
                score: 307,
                enrolled: true
            },
            {
                id:4,
                email: "4@email.com",
                login: "user 4",
                first_name: "First Name 4",
                surname: "Second Name 4",
                score: 306,
                enrolled: true
            },
            {
                id:5,
                email: "5@email.com",
                login: "user 5",
                first_name: "First Name 5",
                surname: "Second Name 5",
                score: 305,
                enrolled: true
            },
            {
                id:6,
                email: "6@email.com",
                login: "user 6",
                first_name: "First Name 6",
                surname: "Second Name 6",
                score: 304,
                enrolled: true
            },
            {
                id:7,
                email: "7@email.com",
                login: "user 7",
                first_name: "First Name 7",
                surname: "Second Name 7",
                score: 303,
                enrolled: true
            },
            {
                id:8,
                email: "8@email.com",
                login: "user 8",
                first_name: "First Name 8",
                surname: "Second Name 8",
                score: 302,
                enrolled: false
            },
            {
                id:9,
                email: "9@email.com",
                login: "user 9",
                first_name: "First Name 9",
                surname: "Second Name 9",
                score: 301,
                enrolled: false
            },
            {
                id:10,
                email: "10@email.com",
                login: "user 10",
                first_name: "First Name 10",
                surname: "Second Name 10",
                score: 300,
                enrolled: false
            },
            {
                id:11,
                email: "11@email.com",
                login: "user 11",
                first_name: "First Name 11",
                surname: "Second Name 11",
                score: 299,
                enrolled: false
            },
            {
                id:12,
                email: "12@email.com",
                login: "user 12",
                first_name: "First Name 12",
                surname: "Second Name 12",
                score: 298,
                enrolled: false
            },
            {
                id:13,
                email: "13@email.com",
                login: "user 13",
                first_name: "First Name 13",
                surname: "Second Name 13",
                score: 297,
                enrolled: false
            },
            {
                id:14,
                email: "14@email.com",
                login: "user 14",
                first_name: "First Name 14",
                surname: "Second Name 14",
                score: 296,
                enrolled: false
            },
            {
                id:15,
                email: "15@email.com",
                login: "user 15",
                first_name: "First Name 15",
                surname: "Second Name 15",
                score: 296,
                enrolled: false
            },
            {
                id:16,
                email: "16@email.com",
                login: "user 16",
                first_name: "First Name 16",
                surname: "Second Name 16",
                score: 295,
                enrolled: false
            },
            {
                id:17,
                email: "17@email.com",
                login: "user 17",
                first_name: "First Name 17",
                surname: "Second Name 17",
                score: 295,
                enrolled: false
            },
            {
                id:18,
                email: "18@email.com",
                login: "user 18",
                first_name: "First Name 18",
                surname: "Second Name 18",
                score: 294,
                enrolled: false
            },
            {
                id:19,
                email: "19@email.com",
                login: "user 19",
                first_name: "First Name 19",
                surname: "Second Name 19",
                score: 293,
                enrolled: false
            },
            {
                id:20,
                email: "20@email.com",
                login: "user 20",
                first_name: "First Name 20",
                surname: "Second Name 20",
                score: 292,
                enrolled: false
            },
            {
                id:21,
                email: "21@email.com",
                login: "user 21",
                first_name: "First Name 21",
                surname: "Second Name 21",
                score: 291,
                enrolled: false
            },
            {
                id:22,
                email: "22@email.com",
                login: "user 22",
                first_name: "First Name 22",
                surname: "Second Name 22",
                score: 290,
                enrolled: false
            }
        ]));
    };
    
    return dispatch => {
        facultyService.getSheet(id).then(res => {
            dispatch(addEntrantSheetValues(res.data));
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
            entry_plan: 120,
            amount_entrant: 90,
            time: 123123123
        }));
    };
    
    return dispatch => {
        facultyService.getEditFormValues(id).then(res => {
            dispatch(addEditFormValues(res.data));
        });
    };
}
