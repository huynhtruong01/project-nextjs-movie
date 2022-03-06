import React from 'react'
import PropTypes from 'prop-types'

Loading.propTypes = {}

function Loading(props) {
  return (
    <div className="loading">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
