import React from 'react'
import {CircularProgress} from '@material-ui/core/'


export const MainLoader = ({}) => {
  return (
    <div className="main-loader" >
      <CircularProgress size={200}/>
    </div>
  )
}

