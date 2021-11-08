import { DeleteOutline } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { blue, green, red, teal } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(theme => {
    return {
        avatar: {
            border: note => {
                if (note.category === "work") {
                    return blue[600]
                }
                if (note.category === "health") {
                    return green[700]
                }
                if (note.category === "todos") {
                    return red[600]
                }
                return teal[500]
            }
        }
    }
})

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note)
    return (
        <Card>
            <CardHeader
                avatar={<Avatar className={classes.avatar}>{note.category[0]}</Avatar>}
                title={note.title}
                subheader={note.category}
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutline />
                    </IconButton>
                }
            />

            <CardContent>
                <Typography>
                    {note.description}
                </Typography>
            </CardContent>

        </Card>
    )
}

export default NoteCard
