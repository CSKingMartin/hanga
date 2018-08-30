import React from 'react'
import PropTypes from 'prop-types'
import StatefulContext from 'react-stateful-context'
import EditorWrapper from './EditorWrapper'
import css from './styles.css'

// Toggle Editor
class ToggleEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: props.context[props.name] || props.defaultValue
    }

    this.handleObservableChange = this.handleObservableChange.bind(this)
  }

  componentWillMount () {
    const { name, context } = this.props
    context.startObservingState(name, this.handleObservableChange)
  }

  componentWillUnmount () {
    const { name, context } = this.props
    context.stopObservingState(name, this.handleObservableChange)
  }

  handleObservableChange () {
    const { name, context } = this.props
    this.setState({ isChecked: context[name] })
  }

  handleChange (ev) {
    const { name, context, onChange } = this.props
    context.setContextState({ [name]: ev.target.checked })
    if (onChange) onChange({ [name]: ev.target.checked })
  }

  render () {
    const {
      name,
      label,
      defaultValue,
      ...rest
    } = this.props

    return (
      <EditorWrapper type="toggle" name={name} label={label} defaultValue={defaultValue} {...rest}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={this.state.isChecked}
          defaultValue={defaultValue}
          className={css.checkboxInput}
          onChange={ev => this.handleChange(ev)}
        />
        <label htmlFor={name} className={css.checkboxIndicator} />
      </EditorWrapper>
    )
  }
}

ToggleEditor.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func,
  context: PropTypes.any
}

ToggleEditor.defaultProps = {
  defaultValue: false,
  onChange: () => {}
}

export default ({ ...args }) =>
  <StatefulContext.Consumer>
    {
      context =>
        <ToggleEditor context={context} {...args} />
    }
  </StatefulContext.Consumer>
