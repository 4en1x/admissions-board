const facultyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_SUBJECT_VALUES':
            return { ...state, subjects: action.subjects };

        case 'ADD_EDIT_FORM_VALUES':
            return { ...state, formValues: action.data };

        default:
            return state;
    }
};

export default facultyReducer;
