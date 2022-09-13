import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import img from '../assets/moh.jpg'
import { db } from '../firebase';


function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');


  const sendTweet = e => {

    e.preventDefault();

      db.collection('posts').add({

        displayName: 'Mohammad Totonchy',
        username: 'mohtoto98',
        verified:true , 
        text : tweetMessage ,
        image: tweetImage,
        avatar: img,

      })

      setTweetImage('')
      setTweetMessage('')
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">

                <Avatar  src={img}/>
                <input  onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} type="text" placeholder="Whats's happening?" />
            </div>
                <input  value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetBox__imgInput" type="text" placeholder="Optional: Enter image URL" />
            <Button onClick={sendTweet} className='tweetBox__tweetButton' variant='outlined'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox