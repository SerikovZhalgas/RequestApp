const ACTION_TYPES = {
    SET_IS_LOGGED_IN: 'request/SET-IS-LOGGED-IN',
}

const initialState = {
    isLoggedIn: false,
};

export const requestReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
};

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: ACTION_TYPES.SET_IS_LOGGED_IN, value} as const);

// types
type InitialStateType = typeof initialState;
type ActionsType = ReturnType<typeof setIsLoggedInAC>;