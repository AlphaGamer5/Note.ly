import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import Masonry from 'react-masonry-css'

export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(async () => {
    const res = await axios.get('http://localhost:8000/notes')
    setNotes(res.data)
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/notes/${id}`)
    setNotes(notes.filter(note => note.id !== id))
  }

  const breakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">


        {notes.map(note => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
