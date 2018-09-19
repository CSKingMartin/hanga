import React from 'react'
import PropTypes from 'prop-types'
import StatefulContext from 'react-stateful-context'
import EditorWrapper from './EditorWrapper'
import css from './styles.module.css'

// Toggle Editor
class ToggleEditor extends React.Component {
  constructor (props) {
    super(props)
    this.initialValue = props.context[props.name] || props.defaultValue || false
    this.state = {
      isChecked: this.initialValue
    }

    this.handleObservableChange = this.handleObservableChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    const { name, context } = this.props
    context.setContextState({ [name]: ev.target.value === 'true' })
  }

  render () {
    const {
      name,
      label,
      ...rest
    } = this.props

    return (
      <EditorWrapper
        type="toggle"
        name={name}
        label={label}
        defaultValue={this.initialValue}
        {...rest}
      >
        <div className={css.radioInputWrapper} data-editor-toggle-wrapper>
          <div className={css.radioInputLeft}>
            <input
              type="radio"
              id={`${name}-true`}
              name={name}
              value="true"
              checked={this.state.isChecked}
              className={css.radioInput}
              onChange={this.handleChange}
              data-editor-toggle
            />
            <label htmlFor={`${name}-true`} className={css.radioIndicator}>True</label>
          </div>

          <div className={css.radioInputRight}>
            <input
              type="radio"
              id={`${name}-false`}
              name={name}
              value="false"
              checked={!this.state.isChecked}
              className={css.radioInput}
              onChange={this.handleChange}
              data-editor-toggle
            />
            <label htmlFor={`${name}-false`} className={css.radioIndicator}>False</label>
          </div>
        </div>
      </EditorWrapper>
    )
  }
}

ToggleEditor.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool,
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
