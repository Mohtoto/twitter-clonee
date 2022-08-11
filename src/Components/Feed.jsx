import React, { useEffect, useState } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import { db } from '../firebase';

function Feed() {

  const [posts, setposts] = useState([]);


  useEffect(() => {
      db.collection('posts').onSnapshot(snapshot => (

        setposts(snapshot.docs.map(doc => doc.data()))
      ))
    }, []);
    
    console.log(posts)

  return (
    <div className='feed'>



        {/* Header */}
        <div className="feed__header">
            <h2>Home</h2>
        </div>


        {/* TweetBox */}

        <TweetBox />
        
      { posts.map((post , index)=> 
      
      
        <Post 
          key={index}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          />
          ) }
        
       

    </div>
  )
}

export default Feed