import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get(`${BASE_URL}/api/friends`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
