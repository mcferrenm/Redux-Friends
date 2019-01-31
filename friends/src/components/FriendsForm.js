import React from "react";

const FriendsForm = props => {
  return (
    <form
      className="friends-form"
      onSubmit={props.addFriendToList}
      autoComplete="off"
    >
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
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendsForm;
