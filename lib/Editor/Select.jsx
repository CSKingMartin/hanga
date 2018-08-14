import React from 'react'
import PropTypes from 'prop-types'
import EditorWrapper from './EditorWrapper'

// Select Editor

export default class Select extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: props.defaultValue }
  }

  render () {
    const {
      name,
      label,
      defaultValue,
      options = [],
      onChange = () => {},
      ...rest
    } = this.props

    return (
      <EditorWrapper name={name} label={label} defaultValue={defaultValue} {...rest}>
        {
          context =>
            <select
              id={name}
              name={name}
              value={this.state.value}
              onChange={ev => {
                this.setState({ value: ev.target.value })
                context.setContextState({ [name]: ev.target.value })
                onChange(ev)
              }}
            >
              {
                options
                  .map(value => (
                    typeof value === 'object'
                      ? value
                      : { value, text: value }
                  ))
                  .map(opt => (
                    <option value={opt.value}>{opt.text}</option>
                  ))
              }
            </select>
        }
      </EditorWrapper>
    )
  }
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ])
  ),
  onChange: PropTypes.func
}
