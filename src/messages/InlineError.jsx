import React from 'react'
import PropTypes from 'prop-types'

const InlineError =  ({text}) => {
  return (
    <span style={{color: "#ae5856"}}></span>
  )
}

InlineError.propTypes = {
    text: PropTypes.string.isRequired,
}




export default InlineError;