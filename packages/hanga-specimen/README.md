# hanga-speciemn

```jsx
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
