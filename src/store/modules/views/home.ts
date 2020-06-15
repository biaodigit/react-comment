
import { combineReducers } from 'redux'
import url from '@/utils/url'
import { FETCH_DATA } from '@/store/middleware/api'
import { schema } from '@/store/modules/entities/products'
import * as types from './types/home'

const params = {
    PATH_LIKES: 'likes',
    PATH_DISCOUNTS: 'discounts',
    PAGE_SIZE_LIKES: 5,
    PAGE_SIZE_DISCOUNTS: 3
}

export const actions = {
    loadLikes: () => {
        return (dispatch: any, getState: any): any => {
            const { pageCount } = getState().views.home.likes
            const rowIndex = pageCount * params.PAGE_SIZE_LIKES
            const endpoint = url.getProductList(params.PATH_LIKES, rowIndex, params.PAGE_SIZE_LIKES)
            return dispatch(fetchLikes(endpoint))
        }
    },
    loadDiscounts: () => {
        return (dispatch: any, getState: any): any => {
            const { ids } = getState().views.home.discounts
            if (ids.length) return null
            const endpoint = url.getProductList(params.PATH_DISCOUNTS, 0, params.PAGE_SIZE_DISCOUNTS)
            return dispatch(fetchDiscounts(endpoint))
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

const fetchDiscounts = (endpoint: string): any => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_DISCOUNTS_REQUEST,
            types.FETCH_DISCOUNTS_SUCCESS,
            types.FETCH_DISCOUNTS_FAILURE
        ],
        endpoint,
        schema
    }
})

const initialState = {
    likes: {
        isFetching: false,
        pageCount: 0,
        ids: []
    },
    discounts: {
        isFetching: false,
        ids: []
    }
}

const likes = (state = initialState.likes, action: types.ActionsType) => {
    switch (action.type) {
        case types.FETCH_LIKES_REQUEST:
            return { ...state, isFetching: true }
        case types.FETCH_LIKES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pageCount: state.pageCount + 1,
                ids: state.ids.concat(action.response.ids)
            }
        case types.FETCH_LIKES_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state
    }
}

const discounts = (state = initialState.discounts, action: types.ActionsType) => {
    switch (action.type) {
        case types.FETCH_DISCOUNTS_REQUEST:
            return { ...state, isFetching: true }
        case types.FETCH_DISCOUNTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ids: state.ids.concat(action.response.ids)
            }
        case types.FETCH_DISCOUNTS_FAILURE:
            return { ...state, isFetching: false }
        default:
            return state
    }
}

const reducer = combineReducers({
    likes,
    discounts
})

export const getLikes = (state: any) => state.views.home.likes.ids.map(id => state.entities.products[id])

export const getDiscounts = (state: any) => state.views.home.discounts.ids.map(id => state.entities.products[id])

export const getPageCountOfLikes = (state: any) => state.views.home.likes.pageCount

export default reducer;

