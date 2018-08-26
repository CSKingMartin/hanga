import PropTypes from 'prop-types'
import React from 'react'

const Editors = ({ children }) =>
  <div className="editors">
    {children}
  </div>

Editors.propTypes = {
  children: PropTypes.any
}

export default Editors
