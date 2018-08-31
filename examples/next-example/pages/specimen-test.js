import React from 'react'
import {
  Editor,
  Specimen,
  StatefulContext
} from 'hanga'
import 'hanga/index.css'

export default () =>
  <StatefulContext.Provider>
    <h1>Specimen Test</h1>

    <p>Aliqua tempor labore minim fugiat ipsum. Est nostrud culpa mollit duis proident nostrud proident deserunt sunt. Consequat esse tempor sunt fugiat cillum sint aute sit adipisicing irure nulla adipisicing ullamco ea. Duis tempor ea Lorem proident laborum est duis id consequat quis. Ea ullamco sunt excepteur in labore esse non mollit dolore nulla aute occaecat.</p>

    <h2>Static Specimen</h2>

    <Specimen>
      <button className="btn">This is a button</button>
    </Specimen>

    <h2>Dynamic Specimen</h2>

    <Specimen Editors={() => (
      <React.Fragment>
        <Editor.Text
          name="buttonText"
          defaultValue="This button text is editable"
        />

        <Editor.Select
          name="color"
          label="Color"
          defaultValue={'blue'}
          options={['red', 'blue', 'green']}
        />

        <Editor.Toggle
          name="isDisabled"
          defaultValue={false}
        />

        <Editor.Text
          name="loremIpsum"
          label="Lorem Ipsum Text"
          defaultValue="Aliqua tempor labore minim fugiat ipsum. Est nostrud culpa mollit duis proident nostrud proident deserunt sunt. Consequat esse tempor sunt fugiat cillum sint aute sit adipisicing irure nulla adipisicing ullamco ea. Duis tempor ea Lorem proident laborum est duis id consequat quis. Ea ullamco sunt excepteur in labore esse non mollit dolore nulla aute occaecat."
        />
      </React.Fragment>
    )}>
      {
        ({ buttonText, isDisabled, color, loremIpsum }) =>
          <React.Fragment>
            <button disabled={isDisabled} style={{ color }} className="btn">{buttonText}</button>

            {
              [...Array(4)].map((_, i) => (
                <p key={i}>{loremIpsum}</p>
              ))
            }
          </React.Fragment>
      }
    </Specimen>
  </StatefulContext.Provider>
