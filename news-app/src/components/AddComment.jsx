import React, { PureComponent } from 'react'

class AddComment extends PureComponent {
  // { username: 'tickle122', body: 'generic comment' }

  state = { username: 'tickle122', comments: [], newComment: '' };

  handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState(
      (currentState) => {
        return { [id]: value };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <form className='comment-form'>
        <label>
          Comment:
          <textarea
            id='newComment'
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