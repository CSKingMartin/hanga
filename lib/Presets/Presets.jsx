import PropTypes from 'prop-types'
import React from 'react'
import StatefulContext from 'react-stateful-context'
import classnames from 'classnames'

import css from './styles.module.css'
import editorCss from '../Editor/styles.module.css'

const Option = () => {
  return <div />
}

Option.propTypes = {
}

class Presets extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: -1
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (ev) {
    const { defaultProps, context } = this.props
    const { setContextState } = context
    const options = this.getOptions()
    const value = parseInt(ev.target.value, 10)

    this.setState({ value })
    setContextState(value >= 0 ? options[value].props : defaultProps)
  }

  getOptions () {
    const { defaultProps, children } = this.props
    return React.Children.map(children, ({ props: childProps }) => ({
      name: childProps.name,
      props: Object.assign({}, defaultProps, childProps.props)
    }))
  }

  render () {
    return (
      <div className={css.root}>
        <div className={classnames(css.selectWrapper, editorCss.selectWrapper)}>
          <select
            className={classnames(css.selectInput, editorCss.selectInput)}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="-1">Default</option>
            {
              this.getOptions().map(({ name }, i) => (
                <option key={name} value={i}>{name}</option>
              ))
            }
          </select>
          <div className={editorCss.selectIcon} />
        </div>
      </div>
    )
  }
}

Presets.propTypes = {
  defaultProps: PropTypes.object,
  children: PropTypes.node,
  context: PropTypes.any
}

const PresetsWrapper = ({ ...props }) =>
  <StatefulContext.Consumer>
    {
      context =>
        <Presets context={context} {...props} />
    }
  </StatefulContext.Consumer>

PresetsWrapper.Option = Option

export default PresetsWrapper
