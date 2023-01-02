import React, { Component } from "react";
import UsersListItem from "./UsersListItem";

import styles from "./UserList.module.css";

const usersData = [
  {
    id: 1,
    firstName: "Test",
    lastName: "Testovich",
    gender: "Male",
    imgsrc: process.env.PUBLIC_URL + "/Img/desert-2042738_1280.jpg",
    twitters: 3.123,
    following: 123,
    followers: 456,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Dou",
    gender: "Male",
    imgsrc: process.env.PUBLIC_URL + "/Img/flower-4368562_1280.jpg",
    twitters: 3.123,
    following: 123,
    followers: 456,
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Dou",
    gender: "Female",
    imgsrc: process.env.PUBLIC_URL + "/Img/rose-165819_1280.jpg",
    twitters: 3.123,
    following: 123,
    followers: 456,
  },
];

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: usersData };
  }

  mapUser = (u) => {
    return <UsersListItem key={u.id} user={u}></UsersListItem>;
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <div className={styles.container}>{users.map(this.mapUser)}</div>
      </>
    );
  }
}
