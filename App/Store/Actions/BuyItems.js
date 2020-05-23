export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = (payload) => {
    return {
        type: INCREMENT,
        payload: payload
    }
}

export const decrement = (payload) => {
    return {
        type: DECREMENT,
        payload: payload
    }
}
