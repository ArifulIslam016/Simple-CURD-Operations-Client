import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userData=useLoaderData()
    
    return (
        <div>
            <h1>User Details here</h1>
          <h1>{userData.name}</h1>
        </div>
    );
};

export default UserDetails;