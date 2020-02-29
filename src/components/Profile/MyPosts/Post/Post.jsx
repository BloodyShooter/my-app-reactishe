import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://s6.cdn.teleprogramma.pro/wp-content/uploads/2019/11/e95bd1baeb47bb9fb6be787a7741d843.jpg'/>
      <div>
        {props.message} 
      </div>
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
};

export default Post