import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import { NewsFeedComponent } from './NewsFeedComponent';

class NewsFeedPage extends Component {

    state={
        newPost:{
            links:[]
        },
        photoPreview:'',
        linkFields:[],
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.newPost)
        
    }
    handleChange=(e)=>{
        let {newPost} = this.state;
        let field = e.target.name;
        if(e.target.type==="file"){
            newPost[field] = e.target.files[0]
           if(e.target.name==="image"){
            this.handlePreview()
            console.log('preview de foto')
           }
        }
        else {
            newPost[field] = e.target.value
        }
        this.setState({newPost})
        console.log(newPost)
    }
    handlePreview=()=>{
        let reader = new FileReader();
        reader.readAsDataURL(this.state.newPost.image)
        reader.onload = () => {
            this.setState({photoPreview:reader.result})
        }
    }

    clearFile=()=>{
        let {newPost} = this.state;
        newPost.image = ''
        newPost.file = ''
        this.setState({photoPreview:'', newPost})
        document.getElementById('image').value = '';
        document.getElementById('file').value = '';
    }
   
    handleLink=()=>{
        let {newPost} = this.state
        let count = newPost.links.length
        newPost.links.push('')
       this.setState({newPost})
    }
    


  render() {
    let {photoPreview, newPost, linkFields} = this.state;
    return (
      <GridList cellHeight={'auto'} cols={3}>
        <GridListTile cols={2} style={styles.gridTile}>
            <NewsFeedComponent 
                handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange} 
                photoPreview={photoPreview} 
                newPost={newPost}    
                handleLink={this.handleLink}   
                linkFields={linkFields}          
                clearFile={this.clearFile}/>
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
