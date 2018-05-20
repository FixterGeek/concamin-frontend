import React from 'react';
import { PostCard } from './PostCard';
import { CardDisplay } from './CardDisplay';



export const NewsFeedComponent = ({posts, handleSubmit, handleChange,newsFeed,handleComment}) => (
    <div style={styles.container}> 
        <PostCard handleSubmit={handleSubmit} handleChange={handleChange}/>
        <CardDisplay newsFeed={newsFeed} handleComment={handleComment} />
    </div>
);

const styles={
    container:{
        padding:'1% 2%'
    }
}