import {DECREASE, INCREASE} from "./action";

function setCounter (state = {counter:100},action) {
    switch (action.type) {
        case INCREASE:
            return {counter:state.counter+1}
        case DECREASE:
            return {counter:state.counter-1}
        default:
            return state
    }
}

export default setCounter;