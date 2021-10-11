import React from 'react'

const ChildNote = (props) => {

  const delNote = () => {
    return props.dNote(props.id);
  }

  return (
    <>
      <div className='main-child'>
        <button className='child-button' onClick={delNote}>⨉</button>
        <h3 className='child-title'>
          {props.title}
        </h3>
        <p className='child-content'>
          {props.content}
        </p>
      </div>
    </>
  )
}



export default ChildNote;