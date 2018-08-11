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
              name="someText"
              defaultValue="Here is some text"
            />

            {someText}
          </React.Fragment>
      }
    </StatefulContext.Consumer>
  </StatefulContext.Provider>
