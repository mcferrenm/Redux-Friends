import React, { Component } from "react";
import { connect } from "react-redux";

import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import {
  getFriends,
  addFriend,
  updateFriend,
  editFriend,
  deleteFriend
} from "./store/actions/friendsActions";

import "./App.css";

const CLEARED_FRIEND = {
  name: "",
  email: "",
  age: "",
  id: ""
};

class App extends Component {
  state = {
    newFriend: {
      name: "",
      email: "",
      age: "",
      id: null
    }
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      newFriend: {
        ...prevState.newFriend,
        [e.target.name]: e.target.value
      }
    }));
  };

  addFriendToList = e => {
    e.preventDefault();
    this.props.addFriend(this.state.newFriend);
    this.setState({
      newFriend: CLEARED_FRIEND
    });
  };

  updateFriend = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.newFriend);
    this.setState({
      newFriend: CLEARED_FRIEND
    });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    this.props.deleteFriend(id);
  };

  editFriend = id => {
    const friend = this.props.friends.find(friend => friend.id === id);
    this.props.editFriend();
    this.setState({
      newFriend: friend
    });
  };

  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Redux Async CRUD App - Friends List</h1>
        </div>
        <FriendsForm
          newFriend={this.state.newFriend}
          handleChange={this.handleChange}
          addFriendToList={this.addFriendToList}
          isEditingFriend={this.props.isEditingFriend}
          updateFriend={this.updateFriend}
        />
        <FriendsList
          friends={this.props.friends}
          editFriend={this.editFriend}
          deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends.friends,
  isEditingFriend: state.form.isEditingFriend
});

export default connect(
  mapStateToProps,
  { getFriends, addFriend, updateFriend, editFriend, deleteFriend }
)(App);
