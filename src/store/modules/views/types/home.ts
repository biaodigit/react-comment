export const FETCH_LIKES_REQUEST = 'HOME/FETCH_LIKES_REQUEST'
export const FETCH_LIKES_SUCCESS = 'HOME/FETCH_LIKES_SUCCESS'
export const FETCH_LIKES_FAILURE = 'HOME/FETCH_LIKES_FAILURE'
export const FETCH_DISCOUNTS_REQUEST = 'HOME/FETCH_DISCOUNTS_REQUEST'
export const FETCH_DISCOUNTS_SUCCESS = 'HOME/FETCH_DISCOUNTS_SUCCESS'
export const FETCH_DISCOUNTS_FAILURE = 'HOME/FETCH_DISCOUNTS_FAILURE'

type ResponseType = {
    ids: string[]
    [key:string]:any
}

export interface FetchLikesRequestAction {
    type: typeof FETCH_LIKES_REQUEST
}

export interface FetchLikesSuccessAction {
    type: typeof FETCH_LIKES_SUCCESS,
    response: ResponseType
}

export interface FetchLikesFailureAction {
    type: typeof FETCH_LIKES_FAILURE,
    error: string
}

export interface FetchDiscountsRequestAction {
    type: typeof FETCH_DISCOUNTS_REQUEST
}

export interface FetchDiscountsSuccessAction {
    type: typeof FETCH_DISCOUNTS_SUCCESS,
    response: ResponseType
}

export interface FetchDiscountsFailureAction {
    type: typeof FETCH_DISCOUNTS_FAILURE,
    error: string
}

export type ActionsType =
    FetchLikesRequestAction |
    FetchLikesSuccessAction |
    FetchLikesFailureAction |
    FetchDiscountsRequestAction |
    FetchDiscountsSuccessAction |
    FetchDiscountsFailureAction
