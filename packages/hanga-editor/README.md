# hanga-editor

## Editor

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

## EditorContext

```jsx
import { EditorContext } from 'hanga'
import Button from './Button'

<EditorContext.Provider>
  {/* Retrieve context state property */}
  <EditorContext.Consumer>
    {
      ({ size }) =>
        <p>Current Size: {size}</p>
    }
  </EditorContext.Consumer>

  {/* Update context state property */}
  <EditorContext.Consumer>
    {
      ({ setContextState }) =>
        <p>
          <button onClick={() => setContextState({ size: 'small' })}>Small</button>
          <button onClick={() => setContextState({ size: 'medium' })}>Medium</button>
        </p>
    }
  </EditorContext.Consumer>

  {/* Editors implement EditorContext.Consumer */}
  <Editor.Select
    name="size" {/* does setContextState({ size: value }) under the hood */}
    label="Size"
    defaultValue={'medium'}
    options={['small', 'medium', 'large']}
  />
</EditorContext.Provider>
```
