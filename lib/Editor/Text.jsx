import React from 'react'
import PropTypes from 'prop-types'
import StatefulContext from 'react-stateful-context'
import EditorWrapper from './EditorWrapper'

// Text Editor
class TextEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.context[props.name] || props.defaultValue
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
    this.setState({ value: context[name] })
  }

  handleChange (ev) {
    const { name, context, onChange } = this.props
    context.setContextState({ [name]: ev.target.value })
    if (onChange) onChange({ [name]: ev.target.value })
  }

  render () {
    const {
      name,
      label,
      defaultValue,
      ...rest
    } = this.props

    return (
      <EditorWrapper name={name} label={label} defaultValue={defaultValue} {...rest}>
        <input
          type="text"
          id={name}
          name={name}
          value={this.state.value}
          onChange={ev => this.handleChange(ev)}
        />
      </EditorWrapper>
    )
  }
}

TextEditor.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  context: PropTypes.any
}

TextEditor.defaultProps = {
  defaultValue: '',
  onChange: () => {}
}

export default ({ ...args }) =>
  <StatefulContext.Consumer>
    {
      context =>
        <TextEditor context={context} {...args} />
    }
  </StatefulContext.Consumer>
