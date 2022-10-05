import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, email, username, id} = friend
    return (
        <div className='border border-sky-500 rounded-2xl p-5 m-5'>
          <h3>Name: {name} </h3>
          <p>Email: {email} </p>
          <p><small>UserName: <Link to={`/friend/${id}`}>{username}</Link> </small></p>
        </div>
    );
};

export default Friend;