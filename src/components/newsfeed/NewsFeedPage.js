import React, { Component } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import { NewsFeedComponent } from './NewsFeedComponent';

class NewsFeedPage extends Component {



  render() {
    return (
      <GridList cellHeight={'auto'} cols={3}>
        <GridListTile cols={2} style={styles.gridList}>
            <NewsFeedComponent/>
        </GridListTile>
          <GridListTile cols={1} style={styles.gridList}>
            Componentes de Recomendaciones y publicidad
          </GridListTile>
      </GridList>
    )
  }
}

const styles = {
    gridList:{
        padding:'2% 3%'
    }
}

export default NewsFeedPage
