import { combineReducers } from "redux";

const initialState = {
    isLoading: false,
    datas: [],
    datasEdu: [],
    datasExp: []
}
const ReduxData = (state = initialState, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return { ...state, isLoading: !state.isLoading };
        case 'POST_DATA_SUCCESS':
            return { ...state, datas: action.datas }
        case 'POST_EDUCATION_SUCCESS':
            return { ...state, datasEdu: action.datasEdu }
        case 'POST_EXPERIENCE_SUCCESS':
            return { ...state, datasExp: action.datasExp }
        default:
            return state
    }
}

export default combineReducers({
    ReduxData
});