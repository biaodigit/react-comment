import request from '@/utils/request'
import url from '@/utils/url'

export const types = {
    FETCH_LIKES_REQUEST: 'HOME/FETCH_LIKE_REQUEST',
    FETCH_LIKES_SUCCESS: 'HOME/FETCH_LIKE_SUCCESS',
    FETCH_LIKES_FAILURE: 'HOME/FETCH_LIKE_FAILURE',
}

export const actions = {
    loadLikes: () => {
        return (dispatch, getState) => {
            dispatch(fetchLikesRequest())
            return request.get(url.getProductList(0, 10)).then((res: ResponseTypes) => {
                dispatch(fetchLikesSuccess(res.data))
            }).catch(error => {
                dispatch(fetchLikesFailure(error))
            })
        }
    }
}

const fetchLikesRequest = () => ({
    type: types.FETCH_LIKES_REQUEST
})

const fetchLikesSuccess = (data) => ({
    type: types.FETCH_LIKES_SUCCESS,
    data
})

const fetchLikesFailure = (error) => ({
    type: types.FETCH_LIKES_REQUEST,
    error
})

const initializeState = {}

const reducer = (state = initializeState, action) => {
    switch (action.type) {
       case types.FETCH_LIKES_REQUEST:

       case types.FETCH_LIKES_SUCCESS:

       case types.FETCH_LIKES_FAILURE:

       default:
           return state
    }
    return state
}

export default reducer;

