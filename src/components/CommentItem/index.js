import './index.css'

const CommentItem = props => {
  const {commentItem, getLikeState, deleteComment} = props
  const {id, username, comment, isLiked, initialClassName} = commentItem

  const onClickLike = () => {
    getLikeState(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li>
      <div className="name-container">
        <p className={`initial ${initialClassName}`}>{username[0]}</p>
        <div>
          <p className="name">{username}</p>
          <p className="comment">{comment}</p>
        </div>
        <p>few min ago</p>
      </div>

      <div className="status-container">
        {isLiked ? (
          <div className="like-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="liked"
              onClick={onClickLike}
            />
            <button type="button" onClick={onClickLike} className="liked">
              Like
            </button>
          </div>
        ) : (
          <div className="like-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              onClick={onClickLike}
            />
            <button type="button" onClick={onClickLike} className="unliked">
              Like
            </button>
          </div>
        )}
        <button type="button" className="delete">
          <img
            data-testid="delete"
            value="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            onClick={onClickDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
