import React from 'react'

import {
  Viewer
} from 'hanga'

export default () =>
  <div>
    <Viewer>
      {() => import('../elements/Button')}
    </Viewer>
  </div>
