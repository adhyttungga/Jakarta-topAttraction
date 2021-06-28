import React from 'react'
import clsx from 'clsx'
import GoogleMapReact from 'google-map-react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import RoomIcon from '@material-ui/icons/Room'
import PublicIcon from '@material-ui/icons/Public'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'

// import image files
import MerlionPict from './../../assets/images/joshua-ang-Gf_KqXHU-PY-unsplash.jpg'
import MBSPict from './../../assets/images/partha-narasimhan-duXJOBVg_l4-unsplash.jpg'
import GardenPict from './../../assets/images/miguel-sousa-ahSFjjLru4Y-unsplash.jpg'
import SingaporeFlyer from './../../assets/images/emily-rusch-oOc2BuEtXYs-unsplash.jpg'
import ClarkeQuay from './../../assets/images/francois-le-nguyen-poEeFwlzPOc-unsplash.jpg'
import FCPPict from './../../assets/images/depositphotos_312108044-stock-photo-natural-scenery-spiral-staircase-gray.jpg'
import Chinatown from './../../assets/images/lily-banse-24ha6GoKHqs-unsplash.jpg'
import OrchardSt from './../../assets/images/hannah-sibayan-KZhMBYzKtNg-unsplash.jpg'
import ACMPict from './../../assets/images/Asian_civilisations_museums_singapore.jpg'

const useStyles = makeStyles({
  root: {
    minHeight: 875,
    display: "flex",
    position: 'relative'
  },
  mapRoot: {
    minWidth: 1420,
    minHeight: 875
  },
  mapRootSlc: {
    minWidth: 1070
  },
  marker: {
    position: "relative",
    backgroundColor: "yellow",
    bottom: "50%",
    left: "50%",
    transform: `translate(${-50}%, ${-50}%)`,
    "&:hover": {
      zIndex: 99,
      "& svg": {
        fontSize: 210
      },
      "& div": {
        display: "flex",
        position: "absolute",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        bottom: 45,
        left: "50%",
        transform: `translate(${-50}px, ${-50}%)`,
        minWidth: 250,
        height: 90,
        backgroundColor: "#92d72e",
        "& > *": {
          paddingLeft: 50,
          fontSize: "1.2rem",
          color: "white",
        },
        "& #address": {
          fontSize: ".85rem",
          visibility: "visible",
          position: "static"
        }
      }
    }
  },
  iconButton: {
    padding: 0,
    color: "#ea5a5a",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: `translateX(${-50}%)`,
    "& svg": {
      fontSize: 90
    }
  },
  iconBtnSelected: {
    padding: 0,
    color: "#ea5a5a",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: `translateX(${-50}%)`,
    "& svg": {
      fontSize: 210
    }
  },
  defaultTag: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    bottom: 25,
    left: "50%",
    transform: `translate(${-7}%, ${-50}%)`,
    width: 210,
    minHeight: 30,
    color: "white",
    backgroundColor: "#282c38",
    borderRadius: "100px 0 0 100px",
    "& > *": {
      fontSize: ".85rem",
      padding: "0 15px",
    },
    "& #address": {
      visibility: "hidden",
      position: "absolute"
    }
  },
  greenTag: {
    display: "flex",
    position: "absolute",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    bottom: 45,
    left: "50%",
    transform: `translate(${-50}px, ${-50}%)`,
    minWidth: 250,
    height: 90,
    backgroundColor: "#92d72e",
    "& > *": {
      paddingLeft: 50,
      fontSize: "1.2rem",
      color: "white",
    },
    "& #address": {
      fontSize: ".85rem",
      visibility: "visible",
      position: "static"
    }
  },
  drawerPaper: {
    width: 350,
    minHeight: 875,
    position: "absolute",
    right: 0,
    backgroundColor: "#313541"
  },
  media: {
    height: 250
  },
  placeName: {
    color: "white",
    backgroundColor: "#72cdd2",
    paddingLeft: 35
  },
  content: {
    display: "flex",
    alignItems: "center",
    color: "white",
    paddingLeft: 35,
    "& a": {
      color: "white",
      textDecoration: "none"
    },
    "& svg": {
      fontSize: "1.1rem",
      marginRight: 5
    }
  },
})

const Content = (props) => {
  const classes = useStyles()
  const {state, center, zoom, stores, toggleMarker} = props

  const media = [
    MerlionPict,
    MBSPict,
    GardenPict,
    Chinatown,
    ACMPict,
    ClarkeQuay,
    FCPPict,
    SingaporeFlyer,
    OrchardSt,
  ]
  
  // display multiple marker
  const displayMarkers = stores.map((store, index) => {
    if (store.lat === null || store.lng === null) {
      return null
    } else {
      return <CustomMarker key={index} 
        id={index}
        anchor={index}
        lat={store.lat}
        lng={store.lng}
        name={store.name}
        address={store.address}
        state={state}
        classes={classes}
        toggleMarker={toggleMarker}
      />
    }
  })

  // display multiple description
  const displayDescription = stores.map((store, index) => {
    return <Description key={index} 
      id={index} 
      anchor={index}
      name={store.name} 
      description={store.description}
      link={store.link} 
      address={store.address} 
      media={media[index]}
      state={state}
      classes={classes}
    />
  })


  return (
    <div className={classes.root}>
      <div className={clsx(classes.mapRoot, {
        [classes.mapRootSlc]: state !== undefined
      })}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBhh3szrqMkWzBPiTEfhDYhp0ZE5nHVzns" }}
          center={center}
          zoom={zoom}
          >  
          {displayMarkers}
        </GoogleMapReact>
      </div>
      {displayDescription}      
    </div>
  )
}

const CustomMarker = (props) => {
  const { 
    classes,
    lat,
    lng,
    anchor, 
    name, 
    address, 
    state, 
    toggleMarker
  } = props
    
  return (
    <div className={classes.marker} >
      <IconButton 
        className={clsx(classes.iconButton, {
          [classes.iconBtnSelected]: state === anchor
        })} 
        onClick={e => toggleMarker(anchor, lat, lng)} 
      >
        <RoomIcon />
      </IconButton>
      <div 
        className={clsx(classes.defaultTag, {
          [classes.greenTag]: state === anchor
        })} 
      >
        <Typography>{name}</Typography>
        <Typography id="address">{address}</Typography>
      </div>
    </div>
  )
}

const Description = (props) => {
  const { 
    classes, 
    anchor, 
    media, 
    name, 
    link, 
    description, 
    address, 
    state 
  } = props
  
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={state === anchor}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <CardMedia image={media} className={classes.media}/>
      <CardContent className={classes.placeName}>
        <Typography className={classes.title}>{name}</Typography>
      </CardContent>
      { 
        description.length == 0 && (
          <React.Fragment>
            <CardContent className={classes.content}>
              <Typography>{description}</Typography>
            </CardContent>
          </React.Fragment>
        ) 
      }
      { 
        description.length > 0 && (
          description.map((desc, index) => (
            <React.Fragment key={index}>
              <CardContent className={classes.content}>
                <Typography>{desc}</Typography>
              </CardContent>
            </React.Fragment>
          ))
        ) 
      }
      <CardContent className={classes.content}>
        <RoomIcon style={{ color: "#72cdd2" }} />
        <Typography>{address}</Typography>
      </CardContent>
      <CardContent className={classes.content}>
        <PublicIcon style={{ color: "#92d72e" }} />
        <Typography>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </Typography>
      </CardContent>
    </Drawer>
  )
}

export default Content