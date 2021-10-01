import { ActionsTypes } from "../constants/actionsType"


export const setData = (data) => {
    return {
        type: ActionsTypes.SET_DATA,
        payload: data,
    };
};