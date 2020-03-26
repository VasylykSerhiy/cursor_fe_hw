import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faRetweet, faUpload,
   faCheckCircle , faChevronDown
 } from '@fortawesome/free-solid-svg-icons'
import './post.scss'

export default class post extends Component {
  render() {
    const {author, content, image, date} = this.props

    return (
      <div className='post'>
        <div className='post__logo'>
          <img src={author.photo} alt={author.name}/>
        </div>
        <div className='post__content'>
          <div className='post__text'>
           <div className='post__author'>
             <div className='post__author__name'>
               {author.name}
               <FontAwesomeIcon className='post__author__name-icon' icon={faCheckCircle} />
              </div>
              <div className='post__author__nick-name'>
               {author.nickname} 

               {date}
              </div>
             
            </div>
            <div className='post__author__text'>
              {content}
            </div>
          </div>
          <div className='post__img'>
           <img src={image} alt='post img'/>
          </div>
          <div className='post__status'>
            <div className='post__comment'><FontAwesomeIcon className='post__icon' icon={ faComment} />482</div>
            <div className='post__repost'><FontAwesomeIcon className='post__icon' icon={ faRetweet} />146</div>
            <div className='post__like'><FontAwesomeIcon className='post__icon' icon={ faHeart} />887</div>
            <div className='post__upload'><FontAwesomeIcon className='post__icon' icon={ faUpload} /></div>
          </div>
        </div>
        <FontAwesomeIcon className='post__show__icon' icon={faChevronDown} />
      </div>
    )
  }
}
