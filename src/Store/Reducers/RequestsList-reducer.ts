const ACTION_TYPES = {
    SET_REQUEST_VALUES: 'requestsList/SET-REQUEST-VALUES'
}

const initialState = {
    requests: [
        {id: 1, name: 'Константин', phoneNumber: '+77471337281', email: 'abzhanow@gmail.com', createdDate: Date.parse(new Date(Date.UTC(2023, 0,1)).toDateString())},
        {id: 2, name: 'Нариман', phoneNumber: '+77471337281', email: 'abzhanovnariman1998@gmail.com', createdDate: Date.parse(new Date(Date.UTC(2023, 1,1)).toDateString())},
        {id: 3, name: 'Юлия', phoneNumber: '+77471337281', email: 'abzhanow@gmail.com', createdDate: Date.parse(new Date(Date.UTC(2023, 2,1)).toDateString())},
        {id: 4, name: 'Нурсултан', phoneNumber: '+77471337281', email: 'abzhanovnariman1998@gmail.com', createdDate: Date.parse(new Date(Date.UTC(2023, 3,1)).toDateString())},
        {id: 5, name: 'Константин', phoneNumber: '+77471337281', email: 'abzhanow@gmail.com', createdDate: Date.parse(new Date(Date.UTC(2023, 3,10)).toDateString())},
    ] as requestsType[]
};

export const requestsListReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_REQUEST_VALUES:
            const newId = state.requests.length + 1;
            const createdDate = Date.now();
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
export type requestsType = {
    id: number
    name: string
    phoneNumber: string
    email: string
    createdDate: string | number
};
type ActionsType = ReturnType<typeof setRequestValuesAC>;