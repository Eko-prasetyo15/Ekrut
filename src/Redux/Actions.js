import axios from 'axios'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL = `${process.env.REACT_APP_BASE_URL}/items/users`;
const URL_EDU = `${process.env.REACT_APP_BASE_URL}/items/education`;
const URL_EXP = `${process.env.REACT_APP_BASE_URL}/items/experience`;

export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const postDataSuccess = (datas) => ({
    type: 'POST_DATA_SUCCESS',
    datas,
});
const postDataFailure = (err) => ({
    type: 'POST_DATA_FAILURE',
    err,
});
const postEducationSuccess = (datas) => ({
    type: 'POST_EDUCATION_SUCCESS',
    datas,
});
const postEducationFailure = (err) => ({
    type: 'POST_EDUCATION_FAILURE',
    err,
});
const postExperienceSuccess = (datas) => ({
    type: 'POST_EXPERIENCE_SUCCESS',
    datas,
});
const postExperienceFailure = (err) => ({
    type: 'POST_EXPERIENCE_FAILURE',
    err,
});

export const postBasic = (data, education, experience) => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.post(URL, {
            fullname: data.fullname,
            phone: data.phone,
            email: data.email
        },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(postDataSuccess(response.data.data.id));
                const user_id = response.data.data.id
                if(user_id){
                    education.forEach(x => {
                        x.user_id = user_id;
                        return x;
                    });
                    experience.forEach(y => {
                        y.user_id = user_id;
                        return y;
                    });
                    dispatch(postEducation(education))
                    dispatch(postExperience(experience))
                }
            })
            .catch(function (error) {
                const err = error.response.data.errors[0].message
                console.error(error);
                dispatch(postDataFailure(error))
                if (error.response.status === 400) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 500) {
                    toast.error(err, { theme: "colored"}) 
                }
                else if (error.response.status === 401) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 403) {
                    toast.error(err, { theme: "colored" })
                }
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};
export const postEducation = (data) => {
    return (dispatch) => {
        return request.post(URL_EDU, {data},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(postEducationSuccess(response.data.data));
            })
            .catch(function (error) {
                const err = error.response.data.errors[0].message
                console.error(error);
                dispatch(postEducationFailure(error))
                if (error.response.status === 400) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 500) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 401) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 403) {
                    toast.error(err, { theme: "colored" })
                }
            })
    };
};
export const postExperience = (experience) => {
    return (dispatch) => {
        return request.post(URL_EXP, { experience },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(postExperienceSuccess(response.data.data));
                if (response) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Data Berhasil Dikirim',
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            })
            .catch(function (error) {
                const err = error.response.data.errors[0].message
                console.error(error);
                dispatch(postExperienceFailure(error))
                if (error.response.status === 400) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 500) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 401) {
                    toast.error(err, { theme: "colored" })
                }
                else if (error.response.status === 403) {
                    toast.error(err, { theme: "colored" })
                }
            })
    };
};


