import {
  EDIT_FRIEND_START,
  EDIT_FRIEND_SUCCESS
} from "../actions/friendsActions";

const initialState = {
  isEditingFriend: false
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FRIEND_START:
      return {
        ...state,
        isEditingFriend: true
      };
    case EDIT_FRIEND_SUCCESS:
      return {
        ...state,
        isEditingFriend: false
      };
    default:
      return state;
  }
};
