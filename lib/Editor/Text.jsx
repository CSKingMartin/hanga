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

    this.$input = React.createRef()
    this.handleObservableChange = this.handleObservableChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    const { name, context } = this.props
    context.startObservingState(name, this.handleObservableChange)
  }

  componentWillUnmount () {
    const { name, context } = this.props
    context.stopObservingState(name, this.handleObservableChange)
  }

  // this might be less reliable in the future this
  // prevents a rerender that causes an ugly cursor
  // flash while typing in the middle of the textbox
  shouldComponentUpdate (_, { value }) {
    if (this.state.value === value) return false
    return true
  }

  componentDidUpdate (_, { value: prevValue }) {
    if (prevValue !== this.state.value) {
      const pos = getChangeIndex(prevValue, this.state.value)

      this.$input.current.selectionStart = pos
      this.$input.current.selectionEnd = pos
    }
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
          ref={this.$input}
          type="text"
          id={name}
          name={name}
          key={name}
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.cursorPosition}
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


// helpers

function getChangeIndex (a, b) {
  let isReversed = false
  if (a.length < b.length) {
    [a, b] = [b, a]
    isReversed = true
  }

  if (a.length === 0) {
    return 1
  }

  return (
    (isReversed ? 1 : 0) +
    [...a].findIndex((chr, i) => chr !== b[i])
  )
}
