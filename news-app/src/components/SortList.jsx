import React, { PureComponent } from 'react';
import { Link } from '@reach/router';

class SortList extends PureComponent {
  state = {
    query: ''
  };

  handleClick = (event) => {
    event.preventDefault();
    const newQuery = event.target.name;
    const newOrder = event.target.value;
    this.props.updateQuery(newQuery, newOrder);
  };

  render() {
    const { query } = this.state;

    return (
      <form className='sort-form'>
        <ul>
          <li>Click to sort by:</li>
          <li>
            <button
              onClick={this.handleClick}
              name={'created_at'}
              value={'desc'}
            >
              Date
            </button>
          </li>
          <li>
            <button
              onClick={this.handleClick}
              name={'comment_count'}
              value={'desc'}
            >
              Comment Count
            </button>
          </li>
          <li>
            <button onClick={this.handleClick} name={'votes'} value={'desc'}>
              Votes
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default SortList;
