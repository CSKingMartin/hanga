import React from 'react'
import {
  Editor,
  Specimen,
  StatefulContext
} from 'hanga'

export default () =>
  <StatefulContext.Provider>
    <h1>Speciment Test</h1>

    <h2>Static Specimen</h2>

    <StatefulContext.Consumer>
      {
        () =>
          <React.Fragment>
            <Specimen>
              <button>This is a button</button>
            </Specimen>
          </React.Fragment>
      }
    </StatefulContext.Consumer>

    <h2>Dynamic Specimen</h2>

    <StatefulContext.Consumer>
      {
        ({ buttonText }) =>
          <React.Fragment>
            <Editor.Text
              name="buttonText"
              label="Button Text"
              defaultValue="This button text is editable"
            />

            <Specimen>
              <p>
                <button>{buttonText}</button>
              </p>
            </Specimen>
          </React.Fragment>
      }
    </StatefulContext.Consumer>
  </StatefulContext.Provider>
