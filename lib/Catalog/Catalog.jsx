import PropTypes from 'prop-types'
import React from 'react'
import Viewer from '../Viewer/'

const Catalog = ({
  archive,
  activeEntry
}) => {
  const {
    Component
  } = activeEntry

  return (
    <div>
      <Viewer>{Component}</Viewer>
    </div>
  )
}

Catalog.propTypes = {
  archive: PropTypes.arrayOf(PropTypes.object),
  activeEntry: PropTypes.object,
}

export default Catalog
