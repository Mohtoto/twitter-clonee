import { Avatar } from '@mui/material'
import React from 'react'
import img from '../assets/moh.jpg'
import  VerifiedUserIcon  from '@mui/icons-material/VerifiedUser'
import  RepeatIcon  from '@mui/icons-material/Repeat'
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder'
import  PublishIcon  from '@mui/icons-material/Publish'
import  ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline'



function Post({

    displayName ,
    usernmae,
    verified,
    timestamp,

}) {
  return (
    <div className='post'>

            <div className="post__avatar">

                <Avatar src={img} />

            </div>
            

            <div className="post__body">

                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>Mohammad Totonchy <span class='post__headerSpecial'><VerifiedUserIcon className='post__badge'/> @MohToto98</span></h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>I challenge you to build a Twitter Clone with React!!!</p>
                        </div>
                    </div>
                    <img src='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif' alt='' />

                    <div className="post__footer">

                        <ChatBubbleOutlineIcon fontSize='small' />
                        <RepeatIcon fontSize='small' />
                        <FavoriteBorderIcon fontSize='small' />
                        <PublishIcon fontSize='small' />


                    </div>
            </div>


    </div>
  )
}

export default Post