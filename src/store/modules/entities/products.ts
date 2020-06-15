export const schema = {
    name: 'products',
    id: 'id'
}

const initialState = {}

const reducer = (state = initialState,action) => {
    if(action.response && action.response.products){
        return {...state,...action.response.products}
    }
    return state
}

export default reducer;

