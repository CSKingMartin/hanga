# hanga-catalog


```jsx
import { Catalog } from 'hanga'
import withRouter from '@next/router'

const archive = [{
  name: 'Components / Button',
  id: 'components/button',
  Component: import('@components/Button/README.mdx') // lazy load components
}, {
  name: 'Components / Heading',
  id: 'components/heading',
  Component: import('@components/Heading/README.mdx')
}]

// Catalog nav + viewer
const catalogApp = () =>
  <Catalog
    // required:
    archive={archive}
    activeEntry={archive.find(entry => entry.id === router.selectedId)}

    // defaults:
    activeView={activeEntry => activeEntry.Component} // return promise / component

    // Components
    ItemLink={(item) => <Link><a href={`?selectedId=${item.id}`}>{item.name}</a></Link>}
    Navigation={({ ...rest }) => <Catalog.Navigation {...rest} />}
    Layout={({ ...rest }) => <Catalog.Layout {...rest} />}
    Viewer={({ ...rest }) => <Viewer {...rest} />}
  />

// connect the router and use query params to select the active
// catalog view.  Worth noting, by making activeItem a function,
// the  application wrapper (router and url structure) is up
// to the implementor and will do nothing by default.
// This also allows for custom file structures
// to be used in the archive, since most UI is customizable.
export default withRouter(catalogApp)
```
