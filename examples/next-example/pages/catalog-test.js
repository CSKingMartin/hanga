import PropTypes from 'prop-types'
import React from 'react'
import { Catalog } from 'hanga'
import { withRouter } from 'next/router'

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
      activeEntry={archive.find(entry => entry.id === router.query.selectedId)}
    />
  </React.Fragment>

catalogApp.propTypes = {
  router: PropTypes.object
}

export default withRouter(catalogApp)
