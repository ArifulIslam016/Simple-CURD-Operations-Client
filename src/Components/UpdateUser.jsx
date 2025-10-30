import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();
  const hanldeUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    fetch(`http://localhost:3000/users/${user._id}`,{
        method:'PATCH',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({name,email})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1>Update user here</h1>
      <form onSubmit={hanldeUpdateUser}>
        <input type="text" name="name" defaultValue={user.name} />
        <br />
        <input type="email" name="email" id="" defaultValue={user.email} />
        <br />
        <input type="submit" value="Edit User" />
      </form>
    </div>
  );
};

export default UpdateUser;
