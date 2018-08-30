import React from 'react'
import {
  Editor,
  StatefulContext
} from 'hanga'

export default () =>
  <StatefulContext.Provider>
    <h1>Editor Test</h1>

    <StatefulContext.Consumer>
      {
        ({ isDisabled }) =>
          <React.Fragment>
            <h2>Toggle Editor</h2>

            <Editor.Toggle
              name="isDisabled"
              defaultValue={false}
            />

            <p>
              <button disabled={isDisabled}>
                This button is {isDisabled ? 'disabled' : 'enabled'}
              </button>
            </p>
          </React.Fragment>
      }
    </StatefulContext.Consumer>

    <StatefulContext.Consumer>
      {
        ({ color }) =>
          <React.Fragment>
            <h2>Select Editor</h2>

            <Editor.Select
              name="color"
              label="Color"
              defaultValue={'blue'}
              options={['red', 'blue', 'green']}
            />

            <p style={{ color }}>Nulla ullamco tempor ad et.</p>
          </React.Fragment>
      }
    </StatefulContext.Consumer>

    <StatefulContext.Consumer>
      {
        ({ activeText }) =>
          <React.Fragment>
            <h2>Text Editor</h2>

            <Editor.Text
              name="activeText"
              label="Active Text"
              defaultValue="Velit tempor non fugiat in sunt in occaecat."
            />

            <p>{activeText}</p>
          </React.Fragment>
      }
    </StatefulContext.Consumer>

    <h2>Multiple Editors Referencing the Same Variable</h2>

    <StatefulContext.Consumer>
      {
        ({ multiIsDisabled }) =>
          <React.Fragment>
            <h3>Toggle Editor</h3>

            <Editor.Toggle
              name="multiIsDisabled"
              defaultValue={false}
            />
            <Editor.Toggle
              name="multiIsDisabled"
            />

            <p>
              <button disabled={multiIsDisabled}>
                This button is {multiIsDisabled ? 'disabled' : 'enabled'}
              </button>
            </p>
          </React.Fragment>
      }
    </StatefulContext.Consumer>

    <StatefulContext.Consumer>
      {
        ({ mutliColor }) =>
          <React.Fragment>
            <h3>Select Editor</h3>

            <Editor.Select
              name="mutliColor"
              label="Color"
              defaultValue={'green'}
              options={['red', 'blue', 'green']}
            />
            <Editor.Select
              name="mutliColor"
              label="Color"
              options={['red', 'blue', 'green']}
            />

            <p style={{ color: mutliColor }}>Nulla ullamco tempor ad et.</p>
          </React.Fragment>
      }
    </StatefulContext.Consumer>

    <StatefulContext.Consumer>
      {
        ({ multiActiveText }) =>
          <React.Fragment>
            <h3>Text Editor</h3>

            <Editor.Text
              name="multiActiveText"
              label="Active Text"
              defaultValue="Velit tempor non fugiat in sunt in occaecat."
            />
            <Editor.Text
              name="multiActiveText"
              label="Active Text"
            />

            <p>{multiActiveText}</p>
          </React.Fragment>
      }
    </StatefulContext.Consumer>
  </StatefulContext.Provider>
