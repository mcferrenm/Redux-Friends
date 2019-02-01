import React from "react";

const FriendsForm = props => {
  return (
    <form className="friends-form">
      <input
        type="text"
        name="name"
        value={props.newFriend.name}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="email"
        value={props.newFriend.email}
        onChange={props.handleChange}
      />
      <input
        type="number"
        name="age"
        value={props.newFriend.age}
        onChange={props.handleChange}
      />
      {props.isEditingFriend ? (
        <button onClick={props.updateFriend}>Update Friend</button>
      ) : (
        <button onClick={props.addFriendToList}>Add Friend</button>
      )}
    </form>
  );
};

export default FriendsForm;
