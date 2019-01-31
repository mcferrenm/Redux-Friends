import React from "react";

const Friend = props => {
  return (
    <div className="friend">
      <p>{props.friend.name}</p>
      <p>{props.friend.email}</p>
      <p>{props.friend.age}</p>
      <button onClick={() => props.editFriend(props.friend.id)}>Update</button>
      <button onClick={e => props.deleteFriend(e, props.friend.id)}>
        Delete
      </button>
    </div>
  );
};

export default Friend;
