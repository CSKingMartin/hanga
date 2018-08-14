import React from 'react'
import StatefulContext from 'react-stateful-context'

// provide context to componentDidMount method
export default ({ Component, ...args }) => (
  <StatefulContext.Consumer>
    {
      context =>
        <Component
          context={context}
          {...args}
        />
    }
  </StatefulContext.Consumer>
)
