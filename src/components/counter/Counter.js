import React from 'react'

function Counter() {
 

  return (
    <>
      <span>
        <b>count: </b>
      </span>
      <br />
      <button className="btn btn-primary" >increment++</button>
      <button className="btn btn-danger">decrement--</button>
      <button className="btn btn-info">random</button>
    </>
  )
}

export default Counter
