import React from 'react'
import Link from 'next/link'

export default () =>
  <div>
    <h1>Hanga Components</h1>

    <ul>
      <li><Link href="/editor-test"><a>Editor Test</a></Link></li>
      <li><Link href="/viewer-test"><a>Viewer Test</a></Link></li>
      <li><Link href="/specimen-test"><a>Specimen Test</a></Link></li>
      <li><Link href="/catalog-test"><a>Catalog Test</a></Link></li>
      <li><Link href="/global-header-test"><a>Global Header Test</a></Link></li>
    </ul>
  </div>
