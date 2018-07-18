import subjectService from '../../service/subject-service';

const POST_SUBJECTS = 'POST_SUBJECTS';

function addEditSubjects() {
    return {
        type: POST_SUBJECTS,
    };
}

export function editSubjects(data) {
    return (dispatch) => {
        subjectService.editSubjects(data).then((res) => {
            dispatch(addEditSubjects(res.data));
        });
    };
}
