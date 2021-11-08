import { KeyboardArrowRightOutlined } from '@mui/icons-material'
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const TextFields = () => {
    const history = useHistory()
    const [state, setState] = useState({
        title: '',
        description: '',
        category: 'todos',
        erTitle: false,
        erDescription: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setState(prev => ({
            ...prev,
            erTitle: false,
            erDescription: false
        }))

        if (!state.title) {
            setState(prev => ({
                ...prev,
                erTitle: true
            }))
        }
        if (!state.description) {
            setState(prev => ({
                ...prev,
                erDescription: true
            }))
        }


        // console.log(state)

        if (state.title && state.description) {
            const { title, description, category } = state
            const res = await axios.post('http://localhost:8000/notes', { title, description, category })
            history.push('/notes')
            console.log(res.data)
        }
        else {
            console.log("Invalid Input")
        }
    }
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "84vh"
            }}
        >
            <Typography
                variant="h6"
                component="h2"
                color="darkkhaki"
                gutterBottom
            >
                Create a New Note
            </Typography>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField
                    variant="filled"
                    label="Title"
                    value={state.title}
                    name="title"
                    sx={{
                        display: "flex",
                        width: "50vw",
                        mb: theme => theme.spacing(2),
                    }}
                    onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                    error={state.erTitle}
                />
                <TextField
                    variant="filled"
                    label="Description"
                    value={state.description}
                    name="description"
                    multiline
                    rows={5}
                    sx={{
                        display: "flex",
                        width: "50vw",
                        mb: theme => theme.spacing(2),
                    }}
                    onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                    error={state.erDescription}
                />

                <FormControl
                    sx={{
                        display: "flex"
                    }}
                >
                    <FormLabel>
                        Add Category
                    </FormLabel>
                    <RadioGroup value={state.category} onChange={(e) => setState(prev => ({ ...prev, category: e.target.value }))}>
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="health" control={<Radio />} label="Health" />
                        <FormControlLabel value="trade" control={<Radio />} label="Trade" />
                    </RadioGroup>
                </FormControl>

                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    endIcon={<KeyboardArrowRightOutlined />}
                >
                    Submit
                </Button>

            </form>
        </Box>
    )
}

export default TextFields
