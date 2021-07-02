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
import Monas from './../../assets/images/monas.jpg'
import Planetarium from './../../assets/images/jakarta-planetarium.jpg'
import MangrovePark from './../../assets/images/mangrove-park.jpg'
import TMII from './../../assets/images/taman-mini.jpg'
import Ancol from './../../assets/images/ancol.jpg'
import Ragunan from './../../assets/images/ragunan-zoo.jpg'
import OldTown from './../../assets/images/kota-tua.jpg'
import Chinatown from './../../assets/images/chinatown.jpg'
import KpSeribu from './../../assets/images/pulau-ayer.jpg'
import NationalMuseum from './../../assets/images/museum-nasional.jpg'
import NationalGallery from './../../assets/images/galeri-nasional.jpg'
import SetuBabakan from './../../assets/images/setu-babakan.jpg'

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
        minWidth: 350,
        height: 90,
        backgroundColor: "#004d98",
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
    color: "#db0030",
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
    minWidth: 210,
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
    minWidth: 350,
    height: 90,
    backgroundColor: "#004d98",
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
    minHeight: 250
  },
  placeName: {
    color: "white",
    backgroundColor: "#004d98",
    paddingLeft: 35
  },
  content: {
    display: "flex",
    color: "white",
    paddingLeft: 35,
    "& a": {
      color: "white",
      textDecoration: "none"
    },
    "& svg": {
      fontSize: "1.1rem",
      marginRight: 5,
      marginTop: 3.5
    }
  },
})

const Content = (props) => {
  const classes = useStyles()
  const {state, center, zoom, stores, toggleMarker} = props

  // media data for description include images and credits
  const media = [
    { image: Monas, credit: "Uray Zulfikar", link: "https://unsplash.com/@uray_z?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" },
    { image: NationalMuseum, credit: "Dea Kariza", link: "https://www.instagram.com/dea.kariza/" },
    { image: NationalGallery, credit: "Galeri Nasional Indonesia", link: "https://www.instagram.com/galerinasional/" },
    { image: Planetarium, credit: "Jakarta Tourism", link: "https://www.instagram.com/jakarta_tourism/" },
    { image: MangrovePark, credit: "TWA Mangrove Angke Kapuk", link: "https://www.instagram.com/twa_mangrove/" },
    { image: TMII, credit: "Novik", link: "https://www.instagram.com/meisnovik/" },
    { image: Ancol, credit: "Syahril Fadillah", link: "https://unsplash.com/@syahrilfdilla_id?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" },
    { image: Ragunan, credit: "Ragunan Zoo", link: "https://www.instagram.com/ragunanzoo/" },
    { image: OldTown, credit: "Yulia Agnis", link: "https://unsplash.com/@agnisyulia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" },
    { image: Chinatown, credit: "Jakob Montrasio", link: "https://www.flickr.com/people/37803129@N00" },
    { image: KpSeribu, credit: "Pulau Seribu", link: "https://pulauseribu.co.id/pulau-ayer/" },
    { image: SetuBabakan, credit: "Ari WibisonoZulfikar", link: "https://www.instagram.com/wibisono.ari/" },
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
  console.log(description.length)
  
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={state === anchor}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <CardMedia image={media.image} className={classes.media}/>
      <Typography className={classes.title} style={{color: "white"}}>Photo by <a href={media.link} style={{color: "white"}}>{media.credit}</a></Typography>
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
        <RoomIcon style={{ color: "#db0030" }} />
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