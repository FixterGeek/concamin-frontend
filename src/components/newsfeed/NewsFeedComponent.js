import React from 'react';
import { PostCard } from './PostCard';
import { CardDisplay } from './CardDisplay';



export const NewsFeedComponent = ({removePost,user={},posts=[], handleSubmit, handleChange, photoPreview, clearFile, newPost, handleLink, addLink, addLinks, clearLink}) => (
    <div> 
        {/* <PostCard 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            photoPreview={photoPreview} 
            clearFile={clearFile}
            user={user}
            {...newPost} 
            clearLink={clearLink}
            addLinks={addLinks}
            handleLink={handleLink}
            addLink={addLink}/> */}
        {posts.map((post, key)=>(
            <CardDisplay removePost={removePost} {...post} key={key} myUser={user}/>
        ))}
    </div>
);

const styles={
   
}