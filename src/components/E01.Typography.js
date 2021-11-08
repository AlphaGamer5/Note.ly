import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({

}))

const Typos = () => {
    return (
        <Box>
            {/* <Typography
                component="h2"
                variant="h3"
                color="primary"
                align="center"
                gutterBottom
            >
                Create a New Note ++
            </Typography> */}
            {/* <Typography
                component="h2"
                variant="body1"
                color="secondary"
                align="left"
                noWrap 
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque sunt voluptates laudantium quo, incidunt, quas excepturi dolorum quis, delectus architecto velit porro quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit ipsum odit.
            </Typography> */}
            <Typography
                component="h2"
                variant="h6"
                color="secondary"
                align="left"
                noWrap
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
        </Box>
    )
}

export default Typos
