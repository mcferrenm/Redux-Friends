import React from "react";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div className="friends-list">
          <p>{friend.name}</p>
          <p>{friend.email}</p>
          <p>{friend.age}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
