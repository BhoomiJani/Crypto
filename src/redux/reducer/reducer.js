import { ActionsTypes } from "../constants/actionsType";


const INITIAL_STATE = {
    data: []
}

export const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ActionsTypes.SET_DATA:
            return { ...state, data: payload }
        default:
            return state;
    }
}