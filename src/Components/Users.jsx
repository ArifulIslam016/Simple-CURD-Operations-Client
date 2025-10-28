import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ userPromise }) => {
  const usersData = use(userPromise);
  const [users, setUsers] = useState(usersData);
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User Added Sucessfully");
          newUser._id = data.insertedId;
          setUsers((prev) => [...prev, newUser]);
          e.target.reset();
        }
      });
  };
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount){
            alert("user Deleted")
            const filteredUser=users.filter(user=>user._id!==id)
            setUsers(filteredUser)
        }
      });
  };
  return (
    <div>
      <h1>{users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="Name" /> <br />
        <input type="email" name="email" placeholder="emial" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        <p>--------------</p>
        {users.map((user) => {
          return (
            <div key={user._id}>
              <h5>
                {user.name}::::::::{user.email}
              </h5>
              <button onClick={() => handleDeleteUser(user._id)}>X</button>
              <Link to={`/users/${user._id}`}>Details</Link>
              <Link to={`/update/${user._id}`}>   EditUser</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
