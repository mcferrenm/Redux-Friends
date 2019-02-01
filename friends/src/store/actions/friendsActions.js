import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";
export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";
export const EDIT_FRIEND_START = "EDIT_FRIEND_START";
export const EDIT_FRIEND_SUCCESS = "EDIT_FRIEND_SUCCESS";
export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_FAILURE = "UPDATE_FRIEND_FAILURE";
export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get(`${BASE_URL}/api/friends`)
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
};

export const addFriend = newFriend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    .post(`${BASE_URL}/api/friends`, newFriend)
    .then(res => dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
};

export const updateFriend = newFriend => dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });
  axios
    .put(`${BASE_URL}/api/friends/${newFriend.id}`, newFriend)
    .then(res => dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err }));
  dispatch({ type: EDIT_FRIEND_SUCCESS });
};

export const editFriend = () => dispatch => {
  dispatch({ type: EDIT_FRIEND_START });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  axios
    .delete(`${BASE_URL}/api/friends/${id}`)
    .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }));
};
