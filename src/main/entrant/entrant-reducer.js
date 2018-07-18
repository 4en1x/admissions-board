const entrantReducer = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_SUBJECT_VALUES':
        return { ...state, subjects: action.subjects };

    case 'ADD_EDIT_FORM_VALUES':
        return { ...state, formValues: action.data };

    case 'GET_ENTRANT_FACULTY':
        return { ...state, entrantFaculty: action.faculty };

    default:
        return state;
    }
};

export default entrantReducer;
