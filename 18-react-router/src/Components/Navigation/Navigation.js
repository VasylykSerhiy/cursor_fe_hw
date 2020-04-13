import React from 'react'
import { Link } from "react-router-dom";

import './Navigation.scss'

export default function Navigation() {
  return (
    <div>
      <nav className="menu">
        <ul className="menu__items">
          <li className="menu__item">
            <Link to="/cursor-react-routes/">Home</Link>
          </li>
          <li className="menu__item">
            <Link to="/cursor-react-routes/posts">Posts</Link>
          </li>
          <li className="menu__item">
            <Link to="/cursor-react-routes/photo">Photo</Link>
          </li>
          <li className="menu__item">
            <Link to="/cursor-react-routes/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
