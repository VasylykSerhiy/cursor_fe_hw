import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'

import './Contact.scss'

const Contact = ({ contacts }) => {

  const items = contacts.map((item, index) => {
    let icon;
    let iconBgClass;

    if (item.gender === 'female') {
      icon = <FontAwesomeIcon icon={faVenus} />
      iconBgClass = 'female'
    } else if (item.gender === 'male') {
      icon = <FontAwesomeIcon icon={faMars} />
      iconBgClass = 'male'
    } else {
      icon = 'n/a'
      iconBgClass = 'n-a'
    }
    const backUrl = `/contacts/${item.firstName}_${item.lastName}`
    return (
      <div className='contact' key={item + index}>
        <div className={`contact__gender ${iconBgClass}`}>{icon}</div>
        <div className='contact__info'>
          <Link
            className='contact__name'
            to={{
              pathname: backUrl,
              state: { item}
            }}
          >
            {item.firstName} {item.lastName}
          </Link>
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