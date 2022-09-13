import React, { useEffect, useState } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import { db } from '../firebase';
import FlipMove from 'react-flip-move';

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
      <FlipMove>
        { posts.map((post , index)=> 
        
        
          <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
            ) }
        </FlipMove>
       

    </div>
  )
}

export default Feed