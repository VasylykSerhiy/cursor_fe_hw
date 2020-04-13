import React from 'react'

import Post from '../../Components/Post/post'
import './Posts.scss'

const posts = [
  {
    author:{
      name: "Anakin skywalker",
      photo: "https://www.stickpng.com/assets/images/585e4bcdcb11b227491c3396.png",
      nickname: "@dart_vader"
    },
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:"https://bitcoinist.com/wp-content/uploads/2018/10/shutterstock_597074750.jpg",
    date:"26 февр.",
  },
  {
    author:{
      name: "Anakin skywalker",
      photo: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
      nickname: "@dart_vader"
    },
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:"https://upload.wikimedia.org/wikipedia/commons/0/04/Post_Danmark_Post_boxes_in_F%C3%A5borg%2C_Denmark.jpg",
    date:"26 февр.",
  },
  {
    author:{
      name: "Anakin skywalker",
      photo: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
      nickname: "@dart_vader"
    },
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:"https://upload.wikimedia.org/wikipedia/commons/0/04/Post_Danmark_Post_boxes_in_F%C3%A5borg%2C_Denmark.jpg",
    date:"26 февр.",
  },
  {
    author:{
      name: "Anakin skywalker",
      photo: "https://www.stickpng.com/assets/images/585e4bcdcb11b227491c3396.png",
      nickname: "@dart_vader"
    },
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:"https://bitcoinist.com/wp-content/uploads/2018/10/shutterstock_597074750.jpg",
    date:"26 февр.",
  },
]

export default function Posts() {
  return (
    <div className="posts__wrapp">
      {
        posts.map((post, index) => (
          <Post
            className="posts__item"
            author={{
                name: post.author.name,
                photo: post.author.photo,
                nickname: post.author.nickname
            }}
            content={post.content}
            image={post.image}
            date={post.date}
            key= {(Date.now() + index).toString()}
          />
        ))
      }
    </div>
  )
}
