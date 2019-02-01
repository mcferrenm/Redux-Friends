import { EDIT_FRIEND_START } from "../actions/friendsActions";

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
    default:
      return state;
  }
};
