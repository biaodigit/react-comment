import * as types from './types'

const initializeState = {
    error: 'error'
}

export const actions = {
    clearError: () => ({
        type: types.CLEAR_ERROR
    })
}

export const getError = (state) => state.app.error

const reducer = (state = initializeState, action:types.ActionsType) => {
    const { type, error } = action
    if (Object.is(type, types.CLEAR_ERROR)) {
        return { ...state, error: null }
    } else if (error) {
        return { ...state, error}
    }
    return state
}

export default reducer;


