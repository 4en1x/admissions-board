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

export function sheetGetEntrants(id) {
    /* while server down */

    return (dispatch) => {
        console.log('lalalala');
        dispatch(addEntrantSheetValues({
            facultyName: ' faculty any name',
            entrants: [
                {
                    id: 1,
                    email: '1@email.com',
                    login: 'user 1',
                    first_name: 'First Name 1',
                    surname: 'Second Name 1',
                    score: 309,
                    enrolled: true,
                },
                {
                    id: 2,
                    email: '2@email.com',
                    login: 'user 2',
                    first_name: 'First Name 2',
                    surname: 'Second Name 2',
                    score: 308,
                    enrolled: true,
                },
                {
                    id: 3,
                    email: '3@email.com',
                    login: 'user 3',
                    first_name: 'First Name 3',
                    surname: 'Second Name 3',
                    score: 307,
                    enrolled: true,
                },
                {
                    id: 4,
                    email: '4@email.com',
                    login: 'user 4',
                    first_name: 'First Name 4',
                    surname: 'Second Name 4',
                    score: 306,
                    enrolled: true,
                },
                {
                    id: 5,
                    email: '5@email.com',
                    login: 'user 5',
                    first_name: 'First Name 5',
                    surname: 'Second Name 5',
                    score: 305,
                    enrolled: true,
                },
                {
                    id: 6,
                    email: '6@email.com',
                    login: 'user 6',
                    first_name: 'First Name 6',
                    surname: 'Second Name 6',
                    score: 304,
                    enrolled: true,
                },
                {
                    id: 7,
                    email: '7@email.com',
                    login: 'user 7',
                    first_name: 'First Name 7',
                    surname: 'Second Name 7',
                    score: 303,
                    enrolled: true,
                },
                {
                    id: 8,
                    email: '8@email.com',
                    login: 'user 8',
                    first_name: 'First Name 8',
                    surname: 'Second Name 8',
                    score: 302,
                    enrolled: false,
                },
                {
                    id: 9,
                    email: '9@email.com',
                    login: 'user 9',
                    first_name: 'First Name 9',
                    surname: 'Second Name 9',
                    score: 301,
                    enrolled: false,
                },
                {
                    id: 10,
                    email: '10@email.com',
                    login: 'user 10',
                    first_name: 'First Name 10',
                    surname: 'Second Name 10',
                    score: 300,
                    enrolled: false,
                },
                {
                    id: 11,
                    email: '11@email.com',
                    login: 'user 11',
                    first_name: 'First Name 11',
                    surname: 'Second Name 11',
                    score: 299,
                    enrolled: false,
                },
                {
                    id: 12,
                    email: '12@email.com',
                    login: 'user 12',
                    first_name: 'First Name 12',
                    surname: 'Second Name 12',
                    score: 298,
                    enrolled: false,
                },
                {
                    id: 13,
                    email: '13@email.com',
                    login: 'user 13',
                    first_name: 'First Name 13',
                    surname: 'Second Name 13',
                    score: 297,
                    enrolled: false,
                },
                {
                    id: 14,
                    email: '14@email.com',
                    login: 'user 14',
                    first_name: 'First Name 14',
                    surname: 'Second Name 14',
                    score: 296,
                    enrolled: false,
                },
                {
                    id: 15,
                    email: '15@email.com',
                    login: 'user 15',
                    first_name: 'First Name 15',
                    surname: 'Second Name 15',
                    score: 296,
                    enrolled: false,
                },
                {
                    id: 16,
                    email: '16@email.com',
                    login: 'user 16',
                    first_name: 'First Name 16',
                    surname: 'Second Name 16',
                    score: 295,
                    enrolled: false,
                },
                {
                    id: 17,
                    email: '17@email.com',
                    login: 'user 17',
                    first_name: 'First Name 17',
                    surname: 'Second Name 17',
                    score: 295,
                    enrolled: false,
                },
                {
                    id: 18,
                    email: '18@email.com',
                    login: 'user 18',
                    first_name: 'First Name 18',
                    surname: 'Second Name 18',
                    score: 294,
                    enrolled: false,
                },
                {
                    id: 19,
                    email: '19@email.com',
                    login: 'user 19',
                    first_name: 'First Name 19',
                    surname: 'Second Name 19',
                    score: 293,
                    enrolled: false,
                },
                {
                    id: 20,
                    email: '20@email.com',
                    login: 'user 20',
                    first_name: 'First Name 20',
                    surname: 'Second Name 20',
                    score: 292,
                    enrolled: false,
                },
                {
                    id: 21,
                    email: '21@email.com',
                    login: 'user 21',
                    first_name: 'First Name 21',
                    surname: 'Second Name 21',
                    score: 291,
                    enrolled: false,
                },
                {
                    id: 22,
                    email: '22@email.com',
                    login: 'user 22',
                    first_name: 'First Name 22',
                    surname: 'Second Name 22',
                    score: 290,
                    enrolled: false,
                },
            ],
        }));
    };

    return (dispatch) => {
        facultyService.getSheet(id).then((res) => {
            dispatch(addEntrantSheetValues(res.data));
        });
    };
}

export function getEditFormValues(id) {
    /* while server down */

    return (dispatch) => {
        console.log('lalalala');
        dispatch(addEditFormValues({
            id: 2,
            name: 'some name for the faculty',
            subjects: [
                'math', 'math2', 'math4',
            ],
            entry_plan: 120,
            amount_entrant: 90,
            time: 123123123,
        }));
    };

    return (dispatch) => {
        facultyService.getEditFormValues(id).then(res => dispatch(addEditFormValues(res.data)));
    };
}


export function getFaculties(page = 1, filter) {
    /* while server down */
    console.log(filter);

    if (page === 1) {
        return (dispatch) => {
            console.log('lalalala');
            dispatch(addFacultyValues({
                totalPages: 3,
                faculties: [
                    {
                        time: 1222222222,
                        id: 0,
                        key: 0,
                        value: '0',
                        entry_plan: 120,
                        amount_entrant: 300,
                        name: 'Faculty of Applied Mathematics and Computer Science',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 1,
                        key: 1,
                        value: '1',
                        entry_plan: 90,
                        amount_entrant: 101,
                        name: 'Faculty of Biology',
                        is_Unavailable: false,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 2,
                        key: 2,
                        value: '2',
                        entry_plan: 150,
                        amount_entrant: 167,
                        name: 'Faculty of Radiophysics and Computer Technologies',
                        is_Unavailable: false,
                        subjects: ['Math', 'Geography', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 3,
                        key: 3,
                        value: '3',
                        entry_plan: 40,
                        amount_entrant: 20,
                        name: 'Faculty of Mathematics and Mechanics',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 4,
                        key: 4,
                        value: '4',
                        entry_plan: 90,
                        amount_entrant: 130,
                        name: 'Faculty of International relations',
                        is_Unavailable: true,
                        subjects: ['Math', 'Chemistry'],
                    },
                    {
                        time: 1222222222,
                        id: 5,
                        key: 5,
                        value: '5',
                        entry_plan: 80,
                        amount_entrant: 70,
                        name: 'Faculty of History',
                        is_Unavailable: false,
                        subjects: ['Math', 'Chemistry', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 6,
                        key: 6,
                        value: '6',
                        entry_plan: 120,
                        amount_entrant: 300,
                        name: 'Faculty of Applied Mathematics and Computer Science',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 7,
                        key: 7,
                        value: '7',
                        entry_plan: 90,
                        amount_entrant: 101,
                        name: 'Faculty of Biology',
                        is_Unavailable: false,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 8,
                        key: 8,
                        value: '8',
                        entry_plan: 150,
                        amount_entrant: 167,
                        name: 'Faculty of Radiophysics and Computer Technologies',
                        is_Unavailable: false,
                        subjects: ['Math', 'Geography', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 9,
                        key: 9,
                        value: '9',
                        entry_plan: 40,
                        amount_entrant: 20,
                        name: 'Faculty of Mathematics and Mechanics',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },

                ],
            }));
        };
    }

    if (page === 2) {
        return (dispatch) => {
            console.log('lalalala');
            dispatch(addFacultyValues({
                totalPages: 3,
                faculties: [

                    {
                        time: 1222222222,
                        id: 10,
                        key: 10,
                        value: '10',
                        entry_plan: 90,
                        amount_entrant: 130,
                        name: 'Faculty of International relations',
                        is_Unavailable: true,
                        subjects: ['Math', 'Chemistry'],
                    },
                    {
                        time: 1222222222,
                        id: 11,
                        key: 11,
                        value: '11',
                        entry_plan: 80,
                        amount_entrant: 70,
                        name: 'Faculty of History',
                        is_Unavailable: false,
                        subjects: ['Math', 'Chemistry', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 12,
                        key: 12,
                        value: '12',
                        entry_plan: 120,
                        amount_entrant: 300,
                        name: 'Faculty of Applied Mathematics and Computer Science',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 13,
                        key: 13,
                        value: '13',
                        entry_plan: 90,
                        amount_entrant: 101,
                        name: 'Faculty of Biology',
                        is_Unavailable: false,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 14,
                        key: 14,
                        value: '14',
                        entry_plan: 150,
                        amount_entrant: 167,
                        name: 'Faculty of Radiophysics and Computer Technologies',
                        is_Unavailable: false,
                        subjects: ['Math', 'Geography', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 15,
                        key: 15,
                        value: '15',
                        entry_plan: 40,
                        amount_entrant: 20,
                        name: 'Faculty of Mathematics and Mechanics',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 16,
                        key: 16,
                        value: '16',
                        entry_plan: 90,
                        amount_entrant: 130,
                        name: 'Faculty of International relations',
                        is_Unavailable: true,
                        subjects: ['Math', 'Chemistry'],
                    },
                    {
                        time: 1222222222,
                        id: 17,
                        key: 17,
                        value: '17',
                        entry_plan: 80,
                        amount_entrant: 70,
                        name: 'Faculty of History',
                        is_Unavailable: false,
                        subjects: ['Math', 'Chemistry', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 18,
                        key: 18,
                        value: '18',
                        entry_plan: 120,
                        amount_entrant: 300,
                        name: 'Faculty of Applied Mathematics and Computer Science',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 19,
                        key: 19,
                        value: '19',
                        entry_plan: 90,
                        amount_entrant: 101,
                        name: 'Faculty of Biology',
                        is_Unavailable: false,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },

                ],
            }));
        };
    }

    if (page === 3) {
        return (dispatch) => {
            console.log('lalalala');
            dispatch(addFacultyValues({
                totalPages: 3,
                faculties: [

                    {
                        time: 1222222222,
                        id: 20,
                        key: 20,
                        value: '20',
                        entry_plan: 150,
                        amount_entrant: 167,
                        name: 'Faculty of Radiophysics and Computer Technologies',
                        is_Unavailable: false,
                        subjects: ['Math', 'Geography', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 21,
                        key: 21,
                        value: '21',
                        entry_plan: 40,
                        amount_entrant: 20,
                        name: 'Faculty of Mathematics and Mechanics',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 22,
                        key: 22,
                        value: '22',
                        entry_plan: 90,
                        amount_entrant: 130,
                        name: 'Faculty of International relations',
                        is_Unavailable: true,
                        subjects: ['Math', 'Chemistry'],
                    },
                    {
                        time: 1222222222,
                        id: 23,
                        key: 23,
                        value: '23',
                        entry_plan: 80,
                        amount_entrant: 70,
                        name: 'Faculty of History',
                        is_Unavailable: false,
                        subjects: ['Math', 'Chemistry', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 24,
                        key: 24,
                        value: '24',
                        entry_plan: 120,
                        amount_entrant: 300,
                        name: 'Faculty of Applied Mathematics and Computer Science',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 25,
                        key: 25,
                        value: '25',
                        entry_plan: 90,
                        amount_entrant: 101,
                        name: 'Faculty of Biology',
                        is_Unavailable: false,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 26,
                        key: 26,
                        value: '26',
                        entry_plan: 150,
                        amount_entrant: 167,
                        name: 'Faculty of Radiophysics and Computer Technologies',
                        is_Unavailable: false,
                        subjects: ['Math', 'Geography', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 27,
                        key: 27,
                        value: '27',
                        entry_plan: 40,
                        amount_entrant: 20,
                        name: 'Faculty of Mathematics and Mechanics',
                        is_Unavailable: true,
                        subjects: ['Math', 'Russian language', 'Belarussian language'],
                    },
                    {
                        time: 1222222222,
                        id: 28,
                        key: 28,
                        value: '28',
                        entry_plan: 90,
                        amount_entrant: 130,
                        name: 'Faculty of International relations',
                        is_Unavailable: true,
                        subjects: ['Math', 'Chemistry'],
                    },
                    {
                        time: 1222222222,
                        id: 29,
                        key: 29,
                        value: '29',
                        entry_plan: 80,
                        amount_entrant: 70,
                        name: 'Faculty of History',
                        is_Unavailable: false,
                        subjects: ['Math', 'Chemistry', 'Belarussian language'],
                    },
                ],
            }));
        };
    }

    return (dispatch) => {
        facultyService.getFaculty(page, filter).then(res => dispatch(addFacultyValues(res.data)));
    };
}
