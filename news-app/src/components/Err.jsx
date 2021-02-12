import React from 'react';

function Err(err) {
  const errObj = JSON.parse(err.request.response);
  console.log(err);
  return (
    <>
      <h3>Error!</h3>
      <p>{errObj.msg}</p>
    </>
  );
}

export default Err;
