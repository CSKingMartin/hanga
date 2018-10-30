import PropTypes from 'prop-types'
import React from 'react'
import { Catalog } from 'hanga'
import { withRouter } from 'next/router'
import Link from 'next/link'
import archive from '../elements/'

// Catalog nav + viewer
const catalogApp = ({ router }) =>
  <Catalog.Catalog
    // required:
    archive={archive}
    findActiveEntry={entry => entry.id === router.query.selectedId}

    ItemLink={
      ({ entry }) =>
        <Link href={`?selectedId=${entry.id}`}>
          <a>{entry.name || entry.id}</a>
        </Link>
    }
  />

catalogApp.propTypes = {
  router: PropTypes.object
}

export default withRouter(catalogApp)
