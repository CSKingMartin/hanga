import PropTypes from 'prop-types'
import React from 'react'
import StatefulContext from 'react-stateful-context'

import Header from './Header'
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
    <StatefulContext.Provider>
      <Layout
        activeEntry={activeEntry}
        activeComponent={activeComponent}
        {...props}
      />
    </StatefulContext.Provider>
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
  Header: PropTypes.func,
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
  Header,
  ItemLink,
  Navigation,
  Viewer,
  Layout
}

export default Catalog
