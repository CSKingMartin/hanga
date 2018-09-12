import PropTypes from 'prop-types'
import React from 'react'

import Layout from './Layout'
import ItemLink from './ItemLink'
import Navigation from './Navigation'
import Viewer from '../Viewer/'

const Catalog = (props) => {
  const {
    archive,
    findActiveEntry,
    findActiveComponent
  } = props

  const activeEntry = archive.find(findActiveEntry)
  const activeComponent = findActiveComponent(activeEntry)

  return (
    <Layout
      activeEntry={activeEntry}
      activeComponent={activeComponent}
      {...props}
    />
  )
}

Catalog.propTypes = {
  // a list of Component descriptions
  archive: PropTypes.arrayOf(PropTypes.object).isRequired,

  // function to find active entry
  findActiveEntry: PropTypes.func.isRequired,

  // function to pick active component
  findActiveComponent: PropTypes.func,

  // Elements
  ItemLink: PropTypes.func,
  Navigation: PropTypes.func,
  Viewer: PropTypes.func,
  Layout: PropTypes.func
}

Catalog.defaultProps = {
  findActiveComponent: activeEntry => (
    activeEntry
      ? activeEntry.Component
      : <div>Active view not found</div>
  ),

  // Components
  ItemLink,
  Navigation,
  Viewer,
  Layout
}

export default Catalog
