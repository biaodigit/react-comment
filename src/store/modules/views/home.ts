import request from '@/utils/request'
import url from '@/utils/url'
import { FETCH_DATA } from '@/store/middleware/api'
import { schema } from '@/store/modules/entities/products'
import * as types from './types/home'

export const actions = {
    loadLikes: () => {
        return (dispatch: any, getState: any): any => {
            const endpoint = url.getProductList(0, 10)
            return dispatch(fetchLikes(endpoint))
        }
    }
}

const fetchLikes = (endpoint: string): any => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_LIKES_REQUEST,
            types.FETCH_LIKES_SUCCESS,
            types.FETCH_LIKES_FAILURE
        ],
        endpoint,
        schema
    }
})

const initializeState = {}

const reducer = (state = initializeState, action: types.ActionsType) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:

        case types.FETCH_LIKES_SUCCESS:

        case types.FETCH_LIKES_FAILURE:

        default:
            return state
    }
}

export default reducer;

