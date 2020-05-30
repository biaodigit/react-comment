export const FETCH_LIKES_REQUEST = 'HOME/FETCH_LIKE_REQUEST'
export const FETCH_LIKES_SUCCESS = 'HOME/FETCH_LIKE_SUCCESS'
export const FETCH_LIKES_FAILURE = 'HOME/FETCH_LIKE_FAILURE'


export interface FetchLikesRequestAction {
    type: typeof FETCH_LIKES_REQUEST
}

export interface FetchLikesSuccessAction {
    type: typeof FETCH_LIKES_SUCCESS,
    data: any
}

export interface FetchLikesFailureAction {
    type: typeof FETCH_LIKES_FAILURE,
    error: any
}

export type ActionsType =
    FetchLikesRequestAction |
    FetchLikesSuccessAction |
    FetchLikesFailureAction