import PropTypes from 'prop-types'
import React from 'react'
import Header from './Header'

import css from './styles.module.css'

const Layout = (props) => {
  const {
    Navigation,
    Viewer,
    activeComponent
  } = props

  return (
    <div className={css.layout}>
      <Header navigation={<Navigation {...props} />} />
      <div className={css.layoutViewer}><Viewer {...props}>{activeComponent}</Viewer></div>
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
