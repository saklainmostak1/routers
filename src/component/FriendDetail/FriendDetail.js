import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    return (
        <div>
            <h1>Friends Detail: {friend.name} </h1>
            <p>Call: {friend.phone} </p>
            <h2>Everything you have to know about this person</h2>
        </div>
    );
};

export default FriendDetail;