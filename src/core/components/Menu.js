import React from 'react'
import clsx from 'clsx'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import MuiTab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Divider from '@material-ui/core/Divider'
import PublicIcon from '@material-ui/icons/Public'
import ExploreIcon from '@material-ui/icons/Explore';
import InfoIcon from '@material-ui/icons/Info'
import ChatIcon from '@material-ui/icons/Chat'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { withStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( {
  root: {
    display: "flex",
    backgroundColor: "#313541",
    maxWidth: 500,
    minHeight: 1000
  },
  tab: {
    minHeight: 125,
    minWidth: 150,
    padding: 0,
    "& svg": {
      fontSize: 40
    }
  },
  tabPanel: {
    overflow: "auto",
    backgroundColor: "#282c37",
    width: 350,
    maxHeight: 1000
  },
  summary: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#282c37",
    minHeight: 60,
  },
  button: {
    minHeight: 40,
    minWidth: 300,
    paddingLeft: 35,
    margin: "auto 0",
    justifyContent: "left",
    color: "white",
    borderRadius: 0,
    textTransform: "none"
  },
  buttonSelected: {
    backgroundColor: "#1c1f27",
    color: "#92d72e",
  },
  filter: {
    color: "#677a81",
  },
} )

const Tab = withStyles( {
  root: {
    color: "#8198a0",
    backgroundColor: "#313541",
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginTop: -1
  },
  selected: {
    color: "#fffeff",
    backgroundColor: "#72cdd2"
  }
} )( MuiTab )

const Accordion = withStyles( {
  root: {
    boxShadow: "none",
    backgroundColor: '#282c37',
    "& svg": {
      color: "#a8abb0"
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
} )( MuiAccordion )

const AccordionSummary = withStyles( {
  root: {
    position: "relative",
    justifyContent: "right",
    backgroundColor: '#282c37',
    color: "#fefefe",
    // marginBottom: -1,
    padding: 0,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    position: "absolute",
    '&$expanded': {
      // margin: '12px 0',
    },
  },
  expanded: {},
} )( MuiAccordionSummary );

const AccordionDetails = withStyles( ( theme ) => ( {
  root: {
    backgroundColor: '#282c37',
    color: "#677a81",
    padding: theme.spacing( 2 ),
    paddingLeft: 55,
  },
} ) )( MuiAccordionDetails );

function allyProps ( index ) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Menu = ( props ) => {
  const classes = useStyles()
  const { state, stores, toggleMarker } = props
  const [ value, setValue ] = React.useState( 0 )

  const handleChange = ( e, newValue ) => {
    setValue( newValue )
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        orientation="vertical"
        onChange={handleChange}
        variant="fullWidth"
        aria-label="Navigation Bar"
        TabIndicatorProps={{
          style: { background: "#72cdd2" }
        }}
      >
        <Tab className={classes.tab} icon={<PublicIcon />} label="Browse" {...allyProps( 0 )} />
        <Tab className={classes.tab} icon={<ExploreIcon />} label="Suggest Attraction" {...allyProps( 1 )} />
        <Tab className={classes.tab} icon={<OndemandVideoIcon />} label="Videos" {...allyProps( 2 )} />
        <Tab className={classes.tab} icon={<ChatIcon />} label="Blog" {...allyProps( 3 )} />
        <Tab className={classes.tab} icon={<InfoIcon />} label="About" {...allyProps( 4 )} />
      </Tabs>
      <TabPanel classes={classes} value={value} index={0}>
        { stores.length !== 0 && <BrowseTab classes={classes} state={state} stores={stores} toggleMarker={toggleMarker} /> }  
      </TabPanel>
      <TabPanel classes={classes} value={value} index={1}>
        <Typography>Suggest Atraction</Typography>
      </TabPanel>
      <TabPanel classes={classes} value={value} index={2}>
        <Typography>Videos</Typography>
      </TabPanel>
      <TabPanel classes={classes} value={value} index={3}>
        <Typography>Blog</Typography>
      </TabPanel>
      <TabPanel classes={classes} value={value} index={4}>
        <Typography>About</Typography>
      </TabPanel>
    </div>
  )
}

function TabPanel ( props ) {
  const { classes, children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className={classes.tabPanel}
      {...other}
    >
      {value === index && (
        <Box p={ "44px 24px" }>
          {children}
        </Box>
      )}
    </div>
  )
}

function BrowseTab ( props ) {
  const { classes, state, stores, toggleMarker } = props
  const [ expand, setExpand ] = React.useState( 'panel0' )
  
  const handleChange = ( panel ) => ( e, newExpand ) => {
    setExpand( newExpand ? panel : false )
  }

  return (
    <React.Fragment>
      <Divider/>
      <Accordion square onChange={handleChange( 'panel0' )}>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel0d-content" id="panel0d-header">
          <Button className={classes.button}>
            <Typography className={classes.filter}>Filter by favorite</Typography>
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>test</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>test</Typography>
        </AccordionDetails>
      </Accordion>
      { stores.map((store, index) => {
        if (store.subattraction === undefined) {
          return (
            <React.Fragment key={index}>
              <Divider/>
              <Paper elevation={0} square className={classes.summary}>
                <Summary classes={classes} 
                  state={state} 
                  store={store} 
                  anchor={index} 
                  toggleMarker={toggleMarker} 
                />
              </Paper>
            </React.Fragment>
          )
        } else {
          return (
            <React.Fragment key={index}>
              <Divider/>
              <Accordion square onChange={handleChange( `panel${index + 1}`)} >
                <AccordionSummary expandIcon={<ArrowDropDownIcon/>} aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`} >
                  <Summary classes={classes} 
                    state={state} 
                    store={store} 
                    anchor={index} 
                    toggleMarker={toggleMarker} 
                  />
                </AccordionSummary>
                { store.subattraction.map((attraction, index) => (
                  <React.Fragment key={index}>
                    <AccordionDetails>
                      <Typography>
                        {attraction}
                      </Typography>
                    </AccordionDetails>
                  </React.Fragment>
                ))}
              </Accordion>
            </React.Fragment>
          )
        }
      })}
      <Divider/>
    </React.Fragment>
  )
}

function Summary ( props ) {
  const { classes, state, store, anchor, toggleMarker } = props

  return (
    <Button 
    className={clsx(classes.button, {
      [classes.buttonSelected]: state === anchor
    })} 
    onClick={
      e => toggleMarker( anchor, store.lat, store.lng )
    }
    >
      <Typography>{store.name}</Typography>
    </Button>
  )
}

export default Menu