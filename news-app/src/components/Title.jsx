import React from 'react';
import { Link } from '@reach/router';

function Title() {
  return (
    <header className='app-header'>
      <h1>
        <Link to={'/'} style={{ textDecoration: 'inherit', color: 'inherit' }}>
          NC News
        </Link>
      </h1>
    </header>
  );
}

export default Title;
