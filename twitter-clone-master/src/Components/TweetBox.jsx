import { Avatar, Button } from '@mui/material'
import React from 'react'
import img from '../assets/moh.jpg'


function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">

                <Avatar  src={img}/>
                <input type="text" placeholder="Whats's happening?" />
            </div>
                <input  className="tweetBox__imgInput" type="text" placeholder="Optional: Enter image URL" />
            <Button  className='tweetBox__tweetButton' variant='outlined'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox