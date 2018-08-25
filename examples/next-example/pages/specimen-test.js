import React from 'react'
import {
  Editor,
  Specimen,
  StatefulContext
} from 'hanga'

export default () =>
  <StatefulContext.Provider>
    <h1>Specimen Test</h1>

    <h2>Static Specimen</h2>

    <Specimen>
      <button>This is a button</button>
    </Specimen>

    <h2>Dynamic Specimen with inline editors</h2>

    <Specimen Editors={() => (
      <Editor.Text
        name="buttonText"
        label="Button Text"
        defaultValue="This button text is editable"
      />
    )}>
      {
        ({ buttonText }) =>
          <button>{buttonText}</button>
      }
    </Specimen>

    <h2>Dynamic Specimen</h2>

    <Editor.Text
      name="buttonText"
      label="Button Text"
      defaultValue="This button text is editable"
    />

    <Specimen>
      {
        ({ buttonText }) =>
          <p>
            <button>{buttonText}</button>
          </p>
      }
    </Specimen>
  </StatefulContext.Provider>
