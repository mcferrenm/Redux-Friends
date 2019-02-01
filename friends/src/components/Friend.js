import React from "react";

const Friend = props => {
  return (
    <div className="friend">
      <div className="friend-body">
        <p>{props.friend.name}</p>
        <p>{props.friend.email}</p>
        <p>{props.friend.age}</p>
      </div>
      <div className="friend-buttons">
        <button onClick={() => props.editFriend(props.friend.id)}>
          Update
        </button>
        <button onClick={e => props.deleteFriend(e, props.friend.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Friend;
