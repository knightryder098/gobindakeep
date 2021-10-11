import React from 'react'
import logo from '../KeepClone/main_logo.gif'

const KeepCloneHeader = () => {
  return (
    <>
      <div className='main-header'>
        <img src={logo} alt='main-logo' />
        <h1 id='header-title'>Gobinda Keep</h1>
      </div>
    </>
  )
};

export default KeepCloneHeader;