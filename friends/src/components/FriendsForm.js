import React from "react";

const FriendsForm = props => {
  return (
    <form className="friends-form" action="">
      <input type="text" name="name" />
      <input type="text" name="email" />
      <input type="number" name="age" />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendsForm;
