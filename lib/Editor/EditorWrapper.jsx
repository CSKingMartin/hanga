import React from 'react'
import PropTypes from 'prop-types'
import StatefulContext from 'react-stateful-context'
import css from './styles.module.css'

// Editor Wrapper
class EditorWrapper extends React.Component {
  componentDidMount () {
    const {
      context,
      name,
      defaultValue
    } = this.props

    if (defaultValue !== undefined) {
      context.setContextState({
        [name]: defaultValue
      })
    }
  }

  render () {
    const {
      label,
      name,
      type,
      children,
      context,
      hideLabel,
      multiline, // hide
      ...rest
    } = this.props

    return (
      <fieldset className={css.wrapper} data-type={type} {...rest}>
        { !hideLabel && <label className={css.label} htmlFor={name}>{label || name}</label> }
        <div className={css.control}>{children}</div>
      </fieldset>
    )
  }
}

EditorWrapper.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.any,
  children: PropTypes.any.isRequired,
  context: PropTypes.object,
  hideLabel: PropTypes.bool
}

EditorWrapper.defaultValue = {
  hideLabel: false
}

export default ({ children, ...rest }) =>
  <StatefulContext.Consumer>
    {
      context =>
        <EditorWrapper context={context} {...rest}>
          {children}
        </EditorWrapper>
    }
  </StatefulContext.Consumer>
