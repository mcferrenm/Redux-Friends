import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  EDIT_FRIEND_START,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from "../actions/friendsActions";

const initialState = {
  friends: [],
  isLoadingFriends: false,
  isAddingFriend: false,
  isEditingFriend: false,
  isUpdatingFriend: false,
  isDeletingFriend: false,
  error: ""
};

export const friendsReducer = (state = initialState, action) => {
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
    case ADD_FRIEND_START:
      return {
        ...state,
        isAddingFriend: true,
        error: ""
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isAddingFriend: false,
        friends: action.payload
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isAddingFriend: false,
        error: action.payload
      };
    case EDIT_FRIEND_START:
      return {
        ...state,
        isEditingFriend: true
      };
    case UPDATE_FRIEND_START:
      return {
        ...state,
        isUpdatingFriend: true,
        error: ""
      };
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        isUpdatingFriend: false,
        friends: action.payload,
        isEditingFriend: false
      };
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        isUpdatingFriend: false,
        error: action.payload
      };
    case DELETE_FRIEND_START:
      return {
        ...state,
        isDeletingFriend: true,
        error: ""
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        isDeletingFriend: false,
        friends: action.payload
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        isDeletingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};
