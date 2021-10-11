import React, { useState } from 'react'
import KeepCloneHeader from './keepCloneHeader';
import MainNote from './MainNote';
import ChildNote from './ChildNote';
import '../KeepClone/KeepClone.css'

const AppClone = () => {

  const [chiildNote, getChidNote] = useState([]);

  const createChildNote = (val) => {
    getChidNote((prev) => {
      return [...prev, val];
    })
  }

  const deleteNote = (val) => {
    getChidNote((prev) => {
      return prev.filter((cur, index) => {
        return index !== val;
      })
    })
  }

  return (
    <>
      <KeepCloneHeader />
      <MainNote
        passNote={createChildNote} />
      <div className='child-note-area'>
        {
          chiildNote.map((val, index) => {
            return <ChildNote
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              dNote={deleteNote}
            />
          }
          )
        }
      </div>


    </>
  )

};

export default AppClone;