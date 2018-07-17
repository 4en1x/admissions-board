const cabinetReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POST_SUBJECTS':
            return { ...state };

        default:
            return state;
    }
};

export default cabinetReducer;