import PropTypes from 'prop-types'
import React from 'react'

const ItemLink = ({ entry }) =>
  <a href={`?selectedId=${entry.id}`}>{entry.name || entry.id}</a>

ItemLink.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string
  })
}

export default ItemLink
