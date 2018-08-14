import React from 'react'
import {
  Editor,
  StatefulContext
} from 'hanga'

export default () =>
  <StatefulContext.Provider>
    <StatefulContext.Consumer>
      {
        ({ isDisabled, color, activeText, outputTest }) =>
          <React.Fragment>
            <h1>Editor Test</h1>

            <h2>Toggle Editor</h2>
            <Editor.Toggle
              name="isDisabled"
              defaultValue={false}
            />
            <p>
              <button disabled={isDisabled}>
                This button is{!isDisabled || ' not'} enabled
              </button>
            </p>

            <h2>Select Editor</h2>
            <Editor.Select
              name="color"
              label="Color"
              defaultValue={'blue'}
              options={['red', 'blue', 'green']}
            />
            <p style={{ color }}>Nulla ullamco tempor ad et.</p>

            <h2>Text Editor</h2>
            <Editor.Text
              name="activeText"
              label="Active Text"
              defaultValue="Velit tempor non fugiat in sunt in occaecat."
            />
            <p>{activeText}</p>

            <h2>Multiple Text Editors Referencing the Same Variable</h2>
            <Editor.Text
              name="outputTest"
              label="Output Text"
              defaultValue="Here is some text"
            />
            <Editor.Text
              name="outputTest"
              label="Output Text (Duplicate input)"
            />
            <p>Output Text: "{outputTest}"</p>
          </React.Fragment>
      }
    </StatefulContext.Consumer>
  </StatefulContext.Provider>
