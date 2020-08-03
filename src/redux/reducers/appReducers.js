import {REQUEST_USERS, SHOW_USERS} from "../actions/action-types";

const initialState = {
    users: [],
    showUsers: null,
    months: [
        { name: "January", number: 1 },
        { name: "February", number: 2 },
        { name: "March", number: 3 },
        { name: "April", number: 4 },
        { name: "May", number: 5 },
        { name: "June", number: 6 },
        { name: "July", number: 7 },
        { name: "August", number: 8 },
        { name: "September", number: 9 },
        { name: "October", number: 10 },
        { name: "November", number: 11 },
        { name: "December", number: 12 },
    ]
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case REQUEST_USERS: {
            return {
                ...state, users: action.payload,
            }
        }
        case SHOW_USERS: {
            return {
                ...state, showUsers: action.payload
            }
        }
        default: return state
    }
}

export default appReducer
