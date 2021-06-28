import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'

// load local json file with import method
// import data from './data.json' 

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  }
}))

const Home = () => {
  const classes = useStyles()
  const [state, setState] = React.useState(undefined)
  const [zoom, setZoom] = React.useState(15)
  const [center, setCenter] = React.useState({
    lat: 1.29250, 
    lng: 103.85200,
  })
  const [data, setData] = React.useState([])

  const toggleCancel = () => {
    setState(undefined)
    setZoom(15)
    setCenter({...center, lat: 1.29250, lng: 103.85200})
  }
  
  const toggleMarker = (newState, lat, lng) => {
    setState(newState)
    setZoom(17)
    setCenter({...center, lat: lat, lng: lng})
  }
  
  // load local json file with fetch method
  const getData = () => {
    fetch('./data.json', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((myJson) => {
        console.log(myJson)
        setData(myJson)
      })
      .catch((err) => {
        console.log(err, ' error')
      })
  }

  React.useLayoutEffect(() => {
    getData()
  }, [])

  return (
    <div className={classes.root}>
      <Menu state={state} stores={data} toggleMarker={toggleMarker}/>
      <div>
        <Header toggleCancel={toggleCancel}/>
        <Content state={state} zoom={zoom} stores={data} center={center} toggleMarker={toggleMarker}/>
      </div>
    </div>
  )
}

export default Home