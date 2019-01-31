import React from "react";

import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => (
        <Friend
          friend={friend}
          editFriend={props.editFriend}
          deleteFriend={props.deleteFriend}
        />
      ))}
    </div>
  );
};

export default FriendsList;
