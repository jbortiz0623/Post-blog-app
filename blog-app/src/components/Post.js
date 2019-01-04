import React, { Component } from 'react';
// Load in Comment component
import Comment from './Comment.js'

class Post extends Component {
    state = {
      title : this.props.data.title,
      author : this.props.data.author,
      body : this.props.data.body,
      edit : false,
      comments: this.props.data.comments,
      newComment: {},
      newCommentBody: '',
      newCommentAuthor: '',
    }

  addComment = (e) => {
    e.preventDefault();
    console.log(this.state.newCommentBody);
    console.log(this.state.newCommentAuthor);

    this.setState({
        newComment: {
            body: this.state.newCommentBody,
            author: this.state.newCommentAuthor
        }
    })
    console.log("new comment object>>>", this.state.newComment);
}

  handleNewCommentBody = (event) => {
        this.setState({
            newCommentBody: event.target.value
        })
        console.log("body state after set>>>", this.state.newCommentBody)

    }

  handleNewCommentAuthor = (event) => {
        this.setState({
            newCommentAuthor: event.target.value
        })
        console.log("author state after set>>>", this.state.newCommentAuthor)

    }

  toggleEdit = () => {
    if(this.state.edit === false){
      this.setState({
        edit: true
      })
    } else {

    this.setState({
      edit: false
    })
  }
}


  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeBody = (event) => {
    this.setState({
      body: event.target.value
    })
  }
    render() {
      let comments = this.props.data.comments.map((comment, index) => (
        <Comment data={comment} key={index}/>
      ))
      if (this.state.edit === false) {
      return(
        <div className='post-page'>
          <h1>{this.state.title}</h1>
          <h2>By {this.state.author}</h2>
          <p>{this.state.body}</p>
          <button className = {"button is-warning"} onClick={this.toggleEdit}>EDIT</button>
          <div className="control">
            <form onSubmit={this.addComment}>
              <input className="input" type="text" placeholder="Comment" value={this.state.newCommentBody} onChange={this.handleNewCommentBody}/>
              <input className="input" type="text" placeholder="user" value={this.state.newCommentAuthor} onChange={this.handleNewCommentAuthor}/>
              <button type="submit" className="button is-success">ADD COMMENT</button>
            </form>
          </div>
          <h3>Comments</h3>
          {comments}
          {this.state.newComment.body}
          By: {this.state.newComment.author}
        </div>

     )
   } else {
      return(
        <div className='post-page'>
          <h1>{this.state.title}</h1>
          <div className="control">
            <input className="input" type="text" defaultValue={this.state.title}
            onChange = {this.handleChangeTitle}/>
            </div>
          <h2>By {this.state.author}</h2>
          <p>{this.state.body}</p>
          <p>Edit Body:</p>
          <div className="control">
            <textarea className="textarea" type="text" defaultValue={this.state.body} onChange =
            {this.handleChangeBody}></textarea>
            </div>
          <button className="button" onClick={this.toggleEdit}
          >Submit</button>
          <h3>Comments</h3>
          {comments}
        </div>
      )
    }
  }
}

export default Post;
