import PropTypes from 'prop-types'
import React from 'react'

import Actions from './Actions'
import Code from './Code'
import Editors from './Editors'
import Preview from './Preview'

class Specimen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFullWidth: false,
      codeView: 'react'
    }

    this.handleCodeViewReact = this.handleCodeViewReact.bind(this)
    this.handleCodeViewHtml = this.handleCodeViewHtml.bind(this)
    this.handleFullWidth = this.handleFullWidth.bind(this)
  }

  handleCodeViewReact () {
    this.setState({ codeView: 'react' })
  }

  handleCodeViewHtml () {
    this.setState({ codeView: 'html' })
  }

  handleFullWidth () {
    const { isFullWidth } = this.state
    this.setState({
      isFullWidth: !isFullWidth
    })
  }

  render () {
    const {
      Head,
      Editors: EditorContent,
      children
    } = this.props

    return (
      <div className="specimen">
        {
          EditorContent &&
          <Editors><EditorContent /></Editors>
        }

        <Preview Head={Head}>{children}</Preview>

        <Actions
          handleCodeViewReact={this.handleCodeViewReact}
          handleCodeViewHtml={this.handleCodeViewHtml}
          handleFullWidth={this.handleFullWidth}
        />

        <Code view={this.state.codeView}>{children}</Code>
      </div>
    )
  }
}

Specimen.propTypes = {
  Head: PropTypes.any,
  Editors: PropTypes.any,
  children: PropTypes.any
}

export default Specimen
