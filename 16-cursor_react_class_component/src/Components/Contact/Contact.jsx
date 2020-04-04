import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'

import './Contact.scss'

const Contact = ({contacts}) => {

  const items = contacts.map((item, index) => {
    let icon ;
    let iconBgClass;

    if( item.gender === 'female' ) {
      icon = <FontAwesomeIcon icon={faVenus}/>
      iconBgClass = 'female'
    } else if( item.gender === 'male') {
      icon = <FontAwesomeIcon icon={faMars}/>
      iconBgClass = 'male'
    } else {
      icon = 'n/a'
      iconBgClass = 'n-a'
    }
    
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