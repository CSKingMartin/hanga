# Hanga

Codename for the inheritor of fuzzy-chainsaw.

This build system will primarily be used for the construction of a component library for full-scale websites.


## Goals

- Using Next.js over Webpack.
- 


## Components

- README viewer: way to view the MDX file within browser
  - we should be able to theme the Markdown parts of MDX files

- Catalog
  - an array of Object definitions. A way to get from a file to a normalized object that we work with.
  - README looks at a single item in the catalog

- Specimin
  - a playground: a way to edit and view individual components or compositions.
  - props / variants are editable
  - could be edited through access to the React or HTML.
  - currently edited by having access to the inputs of the component


  ```
// 
// Catalog demo
// 

import { Catalog } from '@hanga'
import withRouter from '@next/router'

// this is the "file format"
const archive = [{
  id: 'components/button',
  Component: import('@components/Button/README.mdx') // lazy load components
}, {
  id: 'components/heading',
  Component: import('@components/Heading/README.mdx')
}]

const catalogApp = ({
  router
}) => (
  <Catalog 
    // required:
    archive={archive}
    activeItem={() => archive.find(item => item.id === router.selectedId)}

    // defaults:

    // helper for async loading of pages
    loadView={activeItem => activeItem.Component} // expects a component or a promise to a component
    
    // helper for making links
    createItemLink={item => `?selectedId=${item.id}`}

    // Components
    // this allows customizing the look and feel of the catalog
    Viewer={({ Component, ...rest }) => <Catalog.Viewer {...rest}><Component /></Catalog.Viewer>}
    Error={({ ...rest }) => <Catalog.Error {...rest} />}
    Loading={({ ...rest }) => <Catalog.Loading {...rest} />}
    Navigation={({ ...rest }) => <Catalog.Navigation {...rest} />}
    Layout={({ ...rest }) => <Catalog.Layout {...rest} />}
  />
)

// connect the router and use query params to select the active
// catalog view.  Worth noting, by making activeItem a function, 
// the  application wrapper (router and url structure) is up
// to the implementor and will do nothing by default.  
// This also allows for custom file structures
// to be used in the archive, since most UI is customizable.
export default withRouter(catalogApp)
```

```
//
// Specimen demo
//

import { Specimen, SpecimenEditor, connectEditor } from 'hanga'
import MyCustomColorEditor from './MyCustomColorEditor'
import Button from './Button'

// Static Specimen
<Specimen>
  <Button>Click this buttton</Button>
</Specimen>


// inline speciment editor
<SpecimenEditor.Select 
  name="my-super-size-control" // saves this variable up to an uptree storage context
  defaultValue={'small'}
  options={[
    { value: 'small', text: 'Small' },
    { value: 'medium', text: 'Medium' },
    { value: 'large', text: 'Large' },
  ]} 
/>

// Configurable Specimen
<Specimen
  options={{
    // Select Input shorthand
    size: ['small', 'medium', 'large'],
    // { 
    //   label: 'size',
    //   Input: 
    //     <SpecimenEditor.Select 
    //       name="size"
    //       defaultValue={'small'}
    //       options={[
    //         { value: 'small', text: 'Small' },
    //         { value: 'medium', text: 'Medium' },
    //         { value: 'large', text: 'Large' },
    //       ]} 
    //     />
    // }
    // Toggle Input shorthand
    isDisabled: false, 
    // { 
    //   label: 'isDisabled',
    //   Input: 
    //     <SpecimenEditor.Toggle 
    //       name="isDisabled"
    //       defaultValue={false}
    //       options={[
    //         { value: true, text: 'true' },
    //         { value: false, text: 'false' },
    //       ]} 
    //     />
    // }
    
    // Text Input shorthand
    content: 'Click this buttton', 
    // { 
    //   label: 'content',
    //   Input: 
    //     <SpecimenEditor.Text 
    //       name="content"
    //       defaultValue={'Click this buttton'}
    //     />
    // }
    
    // Custom Input
    // do your own thing
    fill: { 
      label: 'Color Fill',
      Input: 
        <MyCustomColorEditor
          defaultValue={'#f00'}
        />
    }
  }}
>
  {({ size, isDisabled, fill, content }) =>
    <Button
      isDisabled={isDisabled}
      size={size}
      fill={fill}
      // or link a variable from an inline editor
      size={connectEditor('my-super-size-control')} // retrieve the variable from storage context
    >
      {content}
    </Button>
  }
</Specimen>

```
  
