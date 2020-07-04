const initialState = {
    isLogin: false,
    user: {}
};
const users = (state = initialState, action) => {
    console.log(state, "User")
    switch(action.type){
        case "REGISTER":
    return {
        ...state,
        user:action.data
            };
        case "LOGIN":
    return {
        ...state,
        user:action.data,
        isLogin: true
            }; 
    default: 
        return state
    };   
}
export default users