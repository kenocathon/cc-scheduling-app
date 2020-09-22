import React from 'react'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '18rem',
    height: '100%',
    backgroundColor: '#003459'
  }
})

export default function Sidebar() {
  const classes = useStyles()

  return (
    <div className={classes.sideBar}>
      
    </div>
  )
}


