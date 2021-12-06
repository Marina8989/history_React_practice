import React from 'react';

const NoMatch = ({history}) => {
  return(
      <div>
          <h2>404Page</h2>
          <p>Redirecting to <span onClick={() => history.push('/')}>Login page</span></p>
      </div>
  )
}

export default NoMatch