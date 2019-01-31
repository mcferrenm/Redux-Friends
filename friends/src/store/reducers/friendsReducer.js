import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE
} from "../actions/friendsActions";

const initialState = {
  friends: [],
  isLoadingFriends: false,
  error: "",
  isEditingFriend: false
};

const friends = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isLoadingFriends: true,
        error: ""
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoadingFriends: false
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        isLoadingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default friends;
