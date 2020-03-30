import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'

import './Contact.scss'

const Contact = ({contacts}) => {

  const items = contacts.map((item, index) => {
    const icon = !item.gender ? 'n/a' :
      item.gender === 'female' ? <FontAwesomeIcon icon={faVenus}/> : <FontAwesomeIcon icon={faMars}/>
   
    const iconBgClass = !item.gender ? 'n-a' :
      item.gender === 'female' ? 'female' : 'male'
    
    return (
      <div className='contact' key={item + index}>
        <div className={`contact__gender ${iconBgClass}`}>{icon}</div>
        <div className='contact__info'>
          <div className='contact__name'>{item.firstName} {item.lastName}</div>
          <div className='contact__phone'><a href={`tel:${item.phone}`}>{item.phone}</a></div>
        </div>
      </div>
    )
  })
  
  return (
    
    <div className='contact__wrap'>
      {
        contacts.length === 0 ? 
        <div className='contact__clear'>No matches found</div> : items
      }
    </div>
  )

}

export default Contact