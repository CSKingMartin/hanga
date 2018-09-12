# hanga

Tools for creating a interactive catalog of components.

## Install

```bash
# using yarn
yarn add hanga

# using npm
npm install hanga --save
```

## Components

### Catalog

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
    activeEntry={entry => entry.id === router.selectedId}

    // defaults:
    activeView={activeEntry => activeEntry.Component} // return promise / component

    // Components
    ItemLink={(item) => <Link><a href={`?selectedId=${item.id}`}>{item.name}</a></Link>}
    Navigation={({ ...rest }) => <Catalog.Navigation {...rest} />}
    Viewer={({ ...rest }) => <Viewer {...rest} />}
    Layout={({ ...rest }) => <Catalog.Layout {...rest} />}
  />

// connect the router and use query params to select the active
// catalog view.  Worth noting, by making activeItem a function,
// the  application wrapper (router and url structure) is up
// to the implementor and will do nothing by default.
// This also allows for custom file structures
// to be used in the archive, since most UI is customizable.
export default withRouter(catalogApp)
```

### Viewer

```jsx
import { Viewer } from 'hanga'

// Viewer
<Viewer
  // defaults:

  // Components
  // this allows customizing the look and feel of the catalog
  RenderView={({ Component, ...rest }) => <><Component {...rest} /></>}
  Error={({ ...rest }) => <Catalog.Error {...rest} />}
  Loading={({ ...rest }) => <Catalog.Loading {...rest} />}

  // styles
  // custom default styles
  styles={{}}
>
  {promise/component}
</Viewer>
```

### Specimen

```jsx
import { Specimen } from 'hanga'
import { Editor, EditorContext } from 'hanga-editor'
import MyCustomColorEditor from './MyCustomColorEditor'
import Button from './Button'

<EditorContext.Provider>
  {/* Static Specimen */}
  <Specimen>
    <Button>Click this buttton</Button>
  </Specimen>

  {/* Inline Editor */}
  <Editor.Select
    name="size"
    label="Size"
    defaultValue={'medium'}
    options={['small', 'medium', 'large']}
  />

  {/* Specimen with Editors */}
  <Specimen
    Editors={<>
      <Editor.Toggle name="isDisabled" defaultValue={false} />
      <Editor.Text name="content" defaultValue={'Click this buttton'} />
      <MyCustomColorEditor name="fill" defaultValue={'#f00'} />
    </>}
  >
    {
      ({ isDisabled, size, fill, content, setContextState }) =>
        <Button
          isDisabled={isDisabled}
          size={size}
          fill={fill}
          onClick={() => setContextState({ size: 'small' })}
        >
          {content}
        </Button>
    }
  </Specimen>
</EditorContext.Provider>
```


### Editor

```jsx
import { Editor } from 'hanga'

<Editor.Select
  name="size"
  label="Size"
  defaultValue={'medium'}
  options={['small', 'medium', 'large']}
/>

<Editor.Toggle
  name="isDisabled"
  defaultValue={false}
/>

<Editor.Text
  name="content"
  defaultValue={'Click this buttton'}
/>
```

## License

MIT License 2018
