import React from 'react'
import { Link } from '@reach/router';

function SortList(path) {
  const currPath = path.path
  return (
    <form className='sort-form'>
      <ul>
        <li>Click to sort by:</li>
        <li>
          <Link to={`${currPath}`}>Date</Link>
        </li>
        <li>
          <Link to={'/topic/coding'}>Comment Count</Link>
        </li>
        <li>
          <Link to={'/topic/football'}>Votes</Link>
        </li>
      </ul>
    </form>
  );
}

export default SortList
