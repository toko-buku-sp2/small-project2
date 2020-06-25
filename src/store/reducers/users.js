const initialState = {
    isLogin: false,
    user: {}
};
const users = (state = initialState, action) => {
    if(action.type==='REGISTER'){
        return {
            ...state,
            user:action.data
        }
    } 
    return state
}
export default users