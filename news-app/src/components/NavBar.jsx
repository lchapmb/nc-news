import React, { PureComponent } from 'react'
import { Link } from '@reach/router';

class NavBar extends PureComponent {
  state = {
    topics: []
  };

  render() {
    const {topics} = this.state;
    return (
      <nav className='nav-bar'>
        <ul>
          <li>
            <Link to={'/'}>
              <button>All Topics</button>
            </Link>
          </li>
          <li>
            <Link to={'/topic/coding'}>
              <button>Coding</button>
            </Link>
          </li>
          <li>
            <Link to={'/topic/football'}>
              <button>Football</button>
            </Link>
          </li>
          <li>
            <Link to={'/topic/cooking'}>
              <button>Cooking</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar