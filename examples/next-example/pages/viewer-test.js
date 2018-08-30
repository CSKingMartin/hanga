import React from 'react'

import {
  Viewer
} from 'hanga'

export default () =>
  <div>
    {/* Viewer that takes a function */}
    <Viewer>
      {() => import('../elements/Button')}
    </Viewer>

    {/* Viewer that takes a React component */}
    <Viewer>
      <div>I am a React Component!</div>
    </Viewer>
  </div>
