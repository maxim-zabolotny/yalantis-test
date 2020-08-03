import * as axios from "axios";
import {REQUEST_USERS, SHOW_USERS} from "./action-types";

export const requestUsers = () => (dispatch) => {
    axios.get("https://yalantis-react-school-api.yalantis.com/api/task0/users", "GET")
        .then(data => {
            return dispatch({ type: REQUEST_USERS, payload: data.data })
        }).catch(err => console.error(err))
}

export const showUsers = (users) => {
    return {type: SHOW_USERS, payload: users}
}

