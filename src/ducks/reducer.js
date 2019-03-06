//INITIAL STATE
const INITIAL_STATE = {
    email: '',
    first_name: '',
    last_name: '',
    picture: '',
    username: '',
    password: ''
}

//action types

//reducer function (w/ switch)
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state
    }
}


//action creators