import { Button, ButtonGroup, Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Buttons = () => {
    return (
        <Container>
            <ButtonGroup
                variant="outlined"
            >
                <Button onClick={() => console.log("clicked One")}>
                    One
                </Button>
                <Button onClick={() => console.log("clicked Two")}>
                    Two
                </Button>
                <Button onClick={() => console.log("clicked Three")}>
                    Three
                </Button>
            </ButtonGroup>
        </Container>
    )
}

export default Buttons
