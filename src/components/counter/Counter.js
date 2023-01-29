import React from 'react'

function Counter() {
  return (
    <>
    <span><b>count:</b></span>
    <span id="counter"></span>
    <br />
    <button className="btn btn-primary">increment++</button>
    <button className="btn btn-danger">decrement--</button>
    <button className="btn btn-info">randon</button>
    </>
  )
}

export default Counter