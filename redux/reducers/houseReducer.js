import { CREATE_HOUSES, FETCH_HOUSES } from "../actions/houseAction";


const initialState = {
    houses: []
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_HOUSES:
            return {
                ...state,
                houses: action.payload
            }
        case CREATE_HOUSES:
            console.log(action.pay)
            return {
                ...state,
                houses: state.houses.concat(action.payload.data)
            }
    }
    return state;
}