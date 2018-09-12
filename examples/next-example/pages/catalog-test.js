import PropTypes from 'prop-types'
import React from 'react'
import { Catalog } from 'hanga'
import { withRouter } from 'next/router'
import Link from 'next/link'

const archive = [{
  id: 'specimen',
  name: 'Specimen Test',
  Component: () => import('./specimen-test.js')
}, {
  id: 'editor',
  name: 'Editor Test',
  Component: () => import('./editor-test.js')
}]

// Catalog nav + viewer
const catalogApp = ({ router }) =>
  <React.Fragment>
    <Catalog
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
  </React.Fragment>

catalogApp.propTypes = {
  router: PropTypes.object
}

export default withRouter(catalogApp)
