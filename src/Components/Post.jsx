import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import  VerifiedUserIcon  from '@mui/icons-material/VerifiedUser'
import  RepeatIcon  from '@mui/icons-material/Repeat'
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder'
import  PublishIcon  from '@mui/icons-material/Publish'
import  ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline'



const Post = forwardRef(({ displayName,username,verified, timestamp, text , image , avatar} , ref) => {
  return (
    <div className='post' ref={ref}>

            <div className="post__avatar">

                <Avatar src={avatar} alt=''/>

            </div>
            

            <div className="post__body">

                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>{displayName}<span class='post__headerSpecial'>{verified ? <VerifiedUserIcon 
                            className='post__badge'/> : null} @{username}</span></h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                <img src={image} />

                    <div className="post__footer">

                        <ChatBubbleOutlineIcon fontSize='small' />
                        <RepeatIcon fontSize='small' />
                        <FavoriteBorderIcon fontSize='small' />
                        <PublishIcon fontSize='small' />


                    </div>
            </div>


    </div>
  )
 })

export default Post