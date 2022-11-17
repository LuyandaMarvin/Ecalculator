import React from 'react'
import logo from '../logo.png';

const Wrapper = ({ children }) =>  {
  return (
    <div className="wrapper">
      <div className='logo'>
        <img src={logo} className="App-logo" width={140} height={80} alt="logo" />
      </div>
      {children}
    </div>
  )
}

export default Wrapper