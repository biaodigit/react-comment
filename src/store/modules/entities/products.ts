export const schema = {
    name: 'products',
    id: 'id'
}

const initializeState = {}

const reducer = (state = initializeState,action) => {
    if(action.response && action.response.products){
        return {...state,...action.response.products}
    }
    return state
}

export default reducer;

