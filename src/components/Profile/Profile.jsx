import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return <div className={classes.content}>
    <div>
      <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts/>
  </div>
}

export default Profile