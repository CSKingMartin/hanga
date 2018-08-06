# hanga-viewer

```jsx
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
