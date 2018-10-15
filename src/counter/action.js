export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'

export function increaseAction() {
    return {type:INCREASE}
}

export function decreaseAction(){
    return {type:DECREASE}
}