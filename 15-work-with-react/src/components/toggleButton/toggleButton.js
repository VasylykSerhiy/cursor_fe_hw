import React, { useState } from 'react'
import './toggleButton.scss'

function ToggleButton() {
  
  const [btnStatus, toggleBtn] = useState(true)

  const togle = () => {
    toggleBtn(!btnStatus)
  }

  return(
    <div className='toggle-btn'>
      <button onClick={togle} className={btnStatus ? 'active' : 'disable'}>
        Togle
      </button>
      <p>{btnStatus ? 'Active' : 'Disable'}</p>
    </div>
  )
}

export default ToggleButton
