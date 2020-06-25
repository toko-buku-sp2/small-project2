import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    isLogin: false,
    user: {},
    books: [],
    book: {}
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
const books = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_BOOK:
        return {
          ...state,
          books: action.payload,
        };
      case actionTypes.GET_BOOK_BY_ID:
        return {
          ...state,
          book: action.payload,
        };
      case actionTypes.UPDATE_BOOK:
        return {
          ...state,
        }
      case actionTypes.DELETE_BOOK:
        return {
          ...state,
        };
      default:
        return initialState;
    }
  }
  export default users