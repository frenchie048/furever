//INITIAL STATE
const INITIAL_STATE = {
    user: {},
    rescue: {},
    email: '',
    first_name: '',
    last_name: '',
    picture: '',
    username: '',
    password: ''
}

//action types
const UPDATE_USER = 'UPDATE_USER';
const SET_USER = 'SET_USER';
const SET_RESCUE = 'SET_RESCUE';

//reducer function (w/ switch)
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };

        case SET_RESCUE:
            return { ...state, rescue: action.payload };

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

export function setUser(user) {
    console.log(user)
    return {
        type: SET_USER,
        payload: user
    }
}

export function setRescue(rescue) {
    console.log(rescue)
    return {
        type: SET_RESCUE,
        payload: rescue
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