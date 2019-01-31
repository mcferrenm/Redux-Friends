import React from "react";

const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => (
        <div className="friend">
          <p>{friend.name}</p>
          <p>{friend.email}</p>
          <p>{friend.age}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
