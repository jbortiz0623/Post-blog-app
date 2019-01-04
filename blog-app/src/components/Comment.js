import React, {Component} from 'react'

class Comment extends Component {
  state = {
  karma: 'good',
  body: this.props.data.body,
  author: this.props.data.author,
  edit: false
};

  changeKarma = () => {
    if (this.state.karma === 'good'){
      this.setState({
        karma: 'bad'

      })
    } else {
      this.setState({
        karma: 'good'
      })
    }
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

handleChangeBody = (event) => {
  this.setState({
    body: event.target.value
  })
}

handleChangeAuthor = (event) => {
  this.setState({
    author: event.target.value
  })
}
  render () {
      if (this.state.edit === false) {
    return (
        <div className={this.state.karma}>
          <p>{this.state.body}</p>
          <p>By: {this.state.author}</p>
          <button className={"button"} onClick={this.changeKarma}>Change Karma</button>
          <button className={"button is-warning"} onClick={this.toggleEdit}>EDIT</button>
        </div>
      )
    } else {

    return (
        <div className='post-page'>
          <p>{this.state.body}</p>
          <div className="control">
          <input className="input" type="text" defaultValue={this.state.body}
          onChange = {this.handleChangeBody}/>
          </div>
          <p>By: {this.state.author}</p>
          <div className="control">
          <input className="input" type="text" defaultValue={this.state.author}
          onChange = {this.handleChangeAuthor}/>
          </div>
          <button className={"button"} onClick={this.toggleEdit}>Submit</button>
        </div>
      )
    }
  }
}
export default Comment
