import React, { Component } from "react";
import axios from "axios";

import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";

import "./App.css";

const BASE_URL = "http://localhost:5000";

const CLEARED_FRIEND = {
  name: "",
  email: "",
  age: ""
};

class App extends Component {
  state = {
    friends: [],
    newFriend: {
      name: "",
      email: "",
      age: "",
      id: ""
    },
    isEditingFriend: false
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
    axios
      .post(`${BASE_URL}/api/friends`, this.state.newFriend)
      .then(res =>
        this.setState({
          friends: res.data,
          newFriend: CLEARED_FRIEND
        })
      )
      .catch(err => console.log(err));
  };

  updateFriend = e => {
    e.preventDefault();
    axios
      .put(
        `${BASE_URL}/api/friends/${this.state.newFriend.id}`,
        this.state.newFriend
      )
      .then(res =>
        this.setState({
          friends: res.data,
          newFriend: CLEARED_FRIEND
        })
      )
      .catch(err => console.log(err));
  };

  editFriend = id => {
    const friend = this.state.friends.find(friend => friend.id === id);
    this.setState({
      newFriend: friend,
      isEditingFriend: true
    });
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}/api/friends`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <FriendsForm
          newFriend={this.state.newFriend}
          handleChange={this.handleChange}
          addFriendToList={this.addFriendToList}
          isEditingFriend={this.state.isEditingFriend}
          updateFriend={this.updateFriend}
        />
        <FriendsList
          friends={this.state.friends}
          editFriend={this.editFriend}
        />
      </div>
    );
  }
}

export default App;
