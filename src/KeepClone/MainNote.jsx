import React, { useState } from 'react'

const MainNote = (props) => {

  const [note, setNote] = useState({
    title: '',
    content: '',
  })

  const getNote = (event) => {
    const { name, value } = event.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,

      }
    })
    console.log(note);
  }

  const sendNote = () => {
    props.passNote(note);
    setNote({
      title: '',
      content: '',
    })
  }

  return (
    <>
      <div className='main-container'>
        <div className='form-container' >
          <input type='text' value={note.title} name='title' placeholder='Give a title' onChange={getNote}></input>
          <textarea type='text' value={note.content} name='content' placeholder='Enter your note' onChange={getNote}></textarea>
          <button className='form-button' onClick={sendNote}>➕</button>
        </div>
      </div>
    </>
  )
}


export default MainNote;