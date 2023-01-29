import React from 'react'
import { connect } from 'react-redux'

function Counter({ count, act }) {
  return (
    <>
      <span>
        <b>count: {count} </b>
      </span>
      <br />
      <button onClick={hel} className="btn btn-primary">
        increment++
      </button>
      <button className="btn btn-danger">decrement--</button>
      <button className="btn btn-info">random</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    act: () => dispatch({ type: 'INCREMENT' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
