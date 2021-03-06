import axios from "axios";
import { GET_USERS_PENDING, GET_USERS_SUCCESS, GET_USERS_ERROR, USER_REMOVE} from "./index";

export const getUsers = () => async (dispatch, getState) => {
    try{
     dispatch({
         type: GET_USERS_PENDING 
     })
     const {data} = await axios("https://rickandmortyapi.com/api/character")
     dispatch({
         type: GET_USERS_SUCCESS,
         payload: data.results
     })
    }catch(err){
     dispatch({
         type: GET_USERS_ERROR,
         payload: err
     })
    }
}


export const removeUser = (user) => (dispatch, getState) => {
    dispatch({
        type: USER_REMOVE,
        payload: user
    })
}