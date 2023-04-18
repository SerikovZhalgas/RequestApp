const ACTION_TYPES = {
    SET_REQUEST_VALUES: 'requestsList/SET-REQUEST-VALUES'
}

const initialState = {
    requests: [] as requestsType[]
};

export const requestsListReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_REQUEST_VALUES:
            const newId = state.requests.length + 1;
            const createdDate = new Date();
            return {...state,
                requests: [...state.requests, {
                    id: newId,
                    name: action.payload.name,
                    phoneNumber: action.payload.phoneNumber,
                    email: action.payload.email,
                    createdDate
                }]
            }
        default:
            return state
    }
};

// actions
export const setRequestValuesAC = (name: string, phoneNumber: string, email: string) =>
    ({
        type: ACTION_TYPES.SET_REQUEST_VALUES,
        payload: {
            name,
            phoneNumber,
            email
        }
    } as const);

// types
type InitialStateType = typeof initialState;
type requestsType = {
    id: number
    name: string
    phoneNumber: string
    email: string
    createdDate: Date
};
type ActionsType = ReturnType<typeof setRequestValuesAC>;