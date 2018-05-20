import React from 'react';
import { PostCard } from './PostCard';
import { CardDisplay } from './CardDisplay';



export const NewsFeedComponent = ({posts, handleSubmit, handleChange, photoPreview, clearFile, newPost, handleLink, linkFields}) => (
    <div style={styles.container}> 
        <PostCard 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            photoPreview={photoPreview} 
            clearFile={clearFile} 
            {...newPost} 
            linkFields={linkFields}
            handleLink={handleLink}/>
        <CardDisplay/>
        <CardDisplay/>
        <CardDisplay/>
    </div>
);

const styles={
    container:{
        padding:'1% 2%'
    }
}