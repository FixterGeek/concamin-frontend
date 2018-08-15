import React from 'react';
import { PostCard } from './PostCard';
import { CardDisplay } from './CardDisplay';



export const NewsFeedComponent = ({removePost,user={},posts=[], handleSubmit, handleChange, photoPreview, clearFile, newPost, handleLink, addLink, addLinks, clearLink, getComments, newComment, handleComment, comment, removeComment, likePosts}) => (
    <div> 
        {posts.map((post, key)=>(
            <CardDisplay removePost={removePost} {...post} key={key} myUser={user} getComments={getComments} newComment={newComment} handleComment={handleComment} comment={comment} removeComment={removeComment} likePosts={likePosts}/>
        ))}
    </div>
);
