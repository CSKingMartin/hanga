import PropTypes from 'prop-types'
import React from 'react'
import { Catalog } from 'hanga'
import { withRouter } from 'next/router'
import Link from 'next/link'

import Button from '../elements/Button/README.mdx'

const archive = [{
  id: 'button',
  name: 'Button',
  Component: () => Promise.resolve(Button)
}]

// Catalog nav + viewer
const catalogApp = ({ router }) =>
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

catalogApp.propTypes = {
  router: PropTypes.object
}

export default withRouter(catalogApp)
