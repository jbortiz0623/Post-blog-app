import React, { Component } from 'react';
import Post from '../components/Post'

let postsInfo = [
  {
  title: 'A Day in the Life of React Development.',
  author: 'Disgruntled Dev',
  body: 'COMPONENTS EVERYWHERE!! AHHHHH!!',
  comments: [
    {body:'Some shaddy internet comment.', author: 'shaddymagee'},
    {body:'A rare comment with actual feedback.', author: 'HepfulPatron'}
  ]
},
  {
  title: 'A Day in the Life of React Development.',
  author: 'Disgruntled Dev',
  body: 'COMPONENTS EVERYWHERE!! AHHHHH!!',
  comments: [
    {body:'Some shaddy internet comment.', author: 'shaddymagee'},
    {body:'A rare comment with actual feedback.', author: 'HepfulPatron'}
  ]
},
  {
  title: 'A Day in the Life of React Development.',
  author: 'Disgruntled Dev',
  body: 'COMPONENTS EVERYWHERE!! AHHHHH!!',
  comments: [
    {body:'Some shaddy internet comment.', author: 'shaddymagee'},
    {body:'A rare comment with actual feedback.', author: 'HepfulPatron'}
  ]
}
]
class PostContainer extends Component {
  render() {
    let posts = postsInfo.map((post, index) => (
      <Post data={post} key={index}/>
    ))
    return(
      <div className =''>
        {posts}
      </div>
    )
  }
}

export default PostContainer;
