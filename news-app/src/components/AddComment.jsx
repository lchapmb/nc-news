import React, { PureComponent } from 'react'

class AddComment extends PureComponent {
  // { username: 'tickle122', body: 'generic comment' }
  // username to be held in state at a higher level and passed down?

  state = { username: 'tickle122', body: '' };

  // use isLoading to disable submit button

  handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = {...this.state};
    this.props.addNewComment(newComment);
    this.setState({ newComment: ''})
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState(
      (currentState) => {
        return { [id]: value };
      }
    );
  };

  // form validation!!!

  render() {
    return (
      <form className='comment-form'>
        <label>
          Comment:
          <textarea
            id='body'
            onChange={this.handleInput}
            value={this.state.newComment}
          ></textarea>
        </label>
        <button onClick={this.handleCommentSubmit}>Submit Comment</button>
      </form>
    );
  }
}

export default AddComment