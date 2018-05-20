import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import { NewsFeedComponent } from './NewsFeedComponent';

class NewsFeedPage extends Component {

    state={
        newPost:{}
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.newPost)
        
    }
    handleChange=(e)=>{
        let {newPost} = this.state;
        let field = e.target.name;
        if(e.target.type==="file")newPost[field] = e.target.files[0]
        newPost[field] = e.target.value
        this.setState({newPost})
        console.log(newPost)
    }



  render() {
    return (
      <GridList cellHeight={'auto'} cols={3}>
        <GridListTile cols={2} style={styles.gridTile}>
            <NewsFeedComponent handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </GridListTile>
          <GridListTile cols={1} style={styles.gridTile}>
            Componentes de Recomendaciones y publicidad
          </GridListTile>
      </GridList>
    )
  }
}

const styles = {
    gridTile:{
        padding:'2%'
    }
}

export default NewsFeedPage
