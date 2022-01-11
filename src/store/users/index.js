const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const USER_REMOVE = "USER_REMOVE";

function userReducer(state=initialState, action){
    switch(action.type){
      case GET_USERS_PENDING:
          return {
              ...state,
              isLoading: true
          } 
      case GET_USERS_SUCCESS:
          return {
              ...state,
              data: action.payload,
              isLoading: false
          } 
      case GET_USERS_ERROR:
          return {
              ...state,
              isError: true,
              isLoading: false
          } 
      case USER_REMOVE:
          return {
              ...state,
              data: state.data.filter(item => item.id !== action.payload.id)
          }         
      default:
          return state;
    }
}

export default userReducer;