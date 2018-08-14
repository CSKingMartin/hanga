import React from 'react'
import {
  Editor,
  StatefulContext
} from 'hanga'

export default () =>
  <StatefulContext.Provider>
    <StatefulContext.Consumer>
      {
        ({ someText }) =>
          <React.Fragment>
            <Editor.Text
              label="Output Text"
              name="someText"
              defaultValue="Here is some text"
            />

            <Editor.Text
              label="Output Text (2nd)"
              name="someText"
            />

            Output Text: "{someText}"
          </React.Fragment>
      }
    </StatefulContext.Consumer>
  </StatefulContext.Provider>
