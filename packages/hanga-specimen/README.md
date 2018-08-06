# hanga-specimen

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
