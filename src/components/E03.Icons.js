import { AcUnit, Add, Remove, Send } from '@mui/icons-material'
import { Button, ButtonGroup, Container, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'

const useStyles = makeStyles({

})

const Icons = () => {
    const classes = useStyles()
    const [counter, setCounter] = useState(0)
    return (
        <Container>

            <Typography>
                Icons Page
            </Typography>
            <Typography>
                Counter : {counter}
            </Typography>

            <ButtonGroup
                sx={{
                    '&:hover': {
                        border: theme => theme.palette.success
                    }
                }}
            >
                <Button
                    variant="outlined"
                    startIcon={<Add />}
                    color="success"
                    onClick={() => setCounter(counter + 1)}
                >
                    Increase
                </Button>
                <Button
                    variant="outlined"
                    endIcon={<Remove />}
                    color="error"
                    onClick={() => setCounter(counter - 1)}
                >
                    Decrease
                </Button>
            </ButtonGroup>
        </Container>
    )
}

export default Icons
