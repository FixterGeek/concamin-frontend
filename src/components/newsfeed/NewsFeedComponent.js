import React from 'react';
import { PostCard } from './PostCard';
import { CardDisplay } from './CardDisplay';



export const NewsFeedComponent = ({posts, handleSubmit, handleChange}) => (
    <div style={styles.container}> 
        <PostCard handleSubmit={handleSubmit} handleChange={handleChange}/>
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