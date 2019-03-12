//INITIAL STATE
const INITIAL_STATE = {
    user: {},
    email: '',
    first_name: '',
    last_name: '',
    picture: '',
    username: '',
    password: ''
}

//action types
const GET_USER = 'GET_USER';
const UPDATE_USER = 'UPDATE_USER';
const SET_USER = 'SET_USER';

//reducer function (w/ switch)
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.payload };

        case SET_USER:
            return { ...state, user: action.payload };

        case UPDATE_USER:
            return Object.assign({}, state, {
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email
            });

        default:
            return state
    }
}


//action creators
export function getUser(username, password) {
    return {
        type: GET_USER,
        payload: {
            username,
            password
        }
    }
}

export function setUser(user) {
    console.log(user)
    return {
        type: SET_USER,
        payload: user
    }
}

export function updateUser(first_name, last_name, email) {
    return {
        type: UPDATE_USER,
        payload: {
            first_name,
            last_name,
            email
        }
    }
}