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
          <li><Link to={'/'}>Home</Link></li>
          <li>Coding</li>
          <li>Football</li>
          <li>Cooking</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar