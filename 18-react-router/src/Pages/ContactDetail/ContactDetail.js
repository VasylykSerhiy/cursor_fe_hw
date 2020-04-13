import React from 'react'
import { useLocation } from 'react-router-dom';

import './ContactDetail.scss'

export default function ContactDetail() {
  const location = useLocation()

  return (
    <div className="contact-detail">
      <div className=" contact-detail__wrap">
        <div className="contact-detail__item">
          <span className="contact-detail__name">First Name:</span>
          {location.state.item.firstName}
        </div>
        <div className="contact-detail__item">
          <span className="contact-detail__name">Last Name:</span>
          {location.state.item.lastName}
        </div>
        <div className="contact-detail__item">
          <span className="contact-detail__name">Phone:</span>
          {location.state.item.phone}
        </div>
        <div className="contact-detail__item">
          <span className="contact-detail__name">Gender:</span>
          {
            location.state.item.gender ? location.state.item.gender : 'n/a'
          }
        </div>
      </div>
    </div>
  )
}