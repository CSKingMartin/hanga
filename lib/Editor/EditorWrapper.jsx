import React from 'react'
import PropTypes from 'prop-types'
import ContextConsumer from './ContextConsumer'

// Editor Wrapper
class EditorWrapper extends React.Component {
  componentDidMount () {
    const {
      context,
      name,
      defaultValue
    } = this.props

    if (defaultValue) {
      context.setContextState({
        [name]: defaultValue
      })
    }
  }

  render () {
    const {
      label,
      name,
      children,
      context,
      ...rest
    } = this.props

    return (
      <fieldset {...rest}>
        <label htmlFor={name}>{label || name}</label>
        <div>{children}</div>
      </fieldset>
    )
  }
}

EditorWrapper.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  children: PropTypes.any.isRequired,
  context: PropTypes.object
}

export default ({ ...args }) =>
  <ContextConsumer
    Component={EditorWrapper}
    {...args}
  />
