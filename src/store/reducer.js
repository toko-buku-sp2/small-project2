const initialState = {
    isLogin: false,
    user: {}
};
const reducer = (state = initialState, action) => {
    if(action.type==='REGISTER'){
        return {
            ...state,
            user:action.data
        }
    } 
    return state
}
export default reducer