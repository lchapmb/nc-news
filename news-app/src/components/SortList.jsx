import React, { PureComponent } from 'react';
import { Link } from '@reach/router';

class SortList extends PureComponent {
  state = {
    query: ''
  };

  handleClick = (event) => {
    event.preventDefault();
    const newQuery = event.target.value;

    this.props.updateQuery(newQuery);
  };

  render() {
    const { query } = this.state;

    return (
      <form className='sort-form'>
        <ul>
          <li>Click to sort by:</li>
          <li>
            <button onClick={this.handleClick} value={'created_at'}>
              Date
            </button>
          </li>
          <li>
            <button onClick={this.handleClick} value={'comment_count'}>
              Comment Count
            </button>
          </li>
          <li>
            <button onClick={this.handleClick} value={'votes'}>
              Votes
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default SortList;