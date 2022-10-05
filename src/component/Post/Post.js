import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const{ title, body, id} = post;
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='border-2 border-sky-500 rounded-2xl m-5
        p-5'>
            <p>Title: {title} </p>
            <p><small>Body: {body} </small></p>
            <Link to={`/post/${id}`}>Link</Link>
           <Link to={`/post/${id}`}>
           <button className='bg-black text-white p-2 rounded-lg'>See Details</button>
           </Link> <br />
           <button onClick={ handleNavigate} className='bg-black text-white p-2 rounded-lg'>See Details Another</button>
        </div>
    );
};

export default Post;