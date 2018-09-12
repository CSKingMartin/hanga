import PropTypes from 'prop-types'
import React from 'react'

const Layout = (props) => {
  const {
    Navigation,
    Viewer,
    activeComponent
  } = props

  return (
    <div>
      <Navigation {...props} />
      <Viewer {...props}>{activeComponent}</Viewer>
    </div>
  )
}

Layout.propTypes = {
  activeComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ]),

  // Elements
  Navigation: PropTypes.func,
  Viewer: PropTypes.func
}

export default Layout
