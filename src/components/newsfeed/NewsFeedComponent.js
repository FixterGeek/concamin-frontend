import React from 'react';
import { PostCard } from './PostCard';
import { CardDisplay } from './CardDisplay';



export const NewsFeedComponent = ({posts, handleSubmit, handleChange, photoPreview, clearFile, newPost, handleLink, addLink, addLinks, clearLink}) => (
    <div style={styles.container}> 
        <PostCard 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            photoPreview={photoPreview} 
            clearFile={clearFile} 
            {...newPost} 
            clearLink={clearLink}
            addLinks={addLinks}
            handleLink={handleLink}
            addLink={addLink}/>
        {posts.map((post, key)=>(
            <CardDisplay {...post} key={key}/>
        ))}
    </div>
);

const styles={
    container:{
        padding:'1% 2%'
    }
}