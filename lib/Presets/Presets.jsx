import PropTypes from 'prop-types'
import React from 'react'
import StatefulContext from 'react-stateful-context'

const Option = () => {
  return <div />
}

Option.propTypes = {
}

const Presets = ({ defaultProps, children }) => (
  <StatefulContext.Consumer>
    {
      ({ setContextState }) =>
        <p>
          {
            React.Children.map(children, child => {
              const props = Object.assign({}, defaultProps, child.props.props)
              const onClick = ev => { ev.preventDefault(); setContextState(props) }

              return (
                <React.Fragment>
                  <a href="#" onClick={onClick}>{child.props.name}</a>
                  &nbsp;
                </React.Fragment>
              )
            })
          }
        </p>
    }
  </StatefulContext.Consumer>
)

Presets.propTypes = {
  defaultProps: PropTypes.object,
  children: PropTypes.node
}

Presets.Option = Option

export default Presets
