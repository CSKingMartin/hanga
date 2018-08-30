import PropTypes from 'prop-types'
import React from 'react'

import Actions from './Actions'
import Code from './Code'
import Editors from './Editors'
import Preview from './Preview'
import Resizer from './Resizer'

import styles from './styles.css'

class Specimen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isFullWidth: false,
      codeView: 'react',
      previewMaxWidth: Infinity
    }

    this.handleCodeViewReact = this.handleCodeViewReact.bind(this)
    this.handleCodeViewHtml = this.handleCodeViewHtml.bind(this)
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
      <div className={styles.specimen}>
        {
          EditorContent &&
          <Editors><EditorContent /></Editors>
        }

        <Resizer
          handleResize={(previewMaxWidth) => this.setState({ previewMaxWidth })}
          maxWidth={this.state.previewMaxWidth}
          screenWidth={1440}
        />

        <Preview
          Head={Head}
          maxWidth={this.state.previewMaxWidth}
          screenWidth={1440}
        >
          {children}
        </Preview>

        <Actions
          view={this.state.codeView}
          handleCodeViewReact={this.handleCodeViewReact}
          handleCodeViewHtml={this.handleCodeViewHtml}
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