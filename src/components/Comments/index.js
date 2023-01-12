import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {username: '', comment: '', commentList: []}

  onAddComment = event => {
    event.preventDefault()
    const {username, comment} = this.state

    const initialContainerBackgroundClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: v4(),
      username,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      username: '',
      comment: '',
    }))
  }

  getLikeStatus = uniqId => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (uniqId === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = uniqId => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => eachComment.id !== uniqId,
      ),
    }))
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {username, comment, commentList} = this.state
    const n = commentList.length
    return (
      <div className="bg">
        <div className="upper-container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="tech">Say something about 4.0 Technology</p>
            <form onSubmit={this.onAddComment}>
              <input
                value={username}
                onChange={this.onChangeName}
                type="text"
                placeholder="Your Name"
                className="input"
              />
              <br />
              <textarea
                className="inputComment"
                value={comment}
                onChange={this.onChangeComment}
                type="textarea"
                placeholder="Your Comment"
              />
              <br />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="
https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div>
          <p className="comment-label">
            <span className="count">{n}</span>Comments
          </p>
          <ul className="ul">
            {commentList.map(each => (
              <CommentItem
                key={each.id}
                getLikeState={this.getLikeStatus}
                commentItem={each}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
