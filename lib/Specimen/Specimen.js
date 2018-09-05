import PropTypes from 'prop-types'
import React from 'react'
import ReactResizeDetector from 'react-resize-detector'

import * as Editor from '../Editor/'
import Actions from './Actions'
import Code from './Code'
import Editors from './Editors'
import Preview from './Preview'
import Resizer from './Resizer'

import './styles.css'
import styles from './styles.module.css'

class Specimen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isFullWidth: false,
      codeView: 'react',
      maxWidth: Infinity,
      previewHeight: 150,
      screenWidth: 1440
    }

    this.handleCodeViewReact = this.handleCodeViewReact.bind(this)
    this.handleCodeViewHtml = this.handleCodeViewHtml.bind(this)
    this.handlePageResize = this.handlePageResize.bind(this)
    this.handleResize = this.handleResize.bind(this)
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

  handlePageResize (width) {
    this.setState({
      screenWidth: width
    })
  }

  handleResize ({ width, height }) {
    if (width !== undefined) this.setState({ maxWidth: width })
    if (height !== undefined) this.setState({ previewHeight: height })
  }

  renderQuickEditors () {
    if (!this.props.quickEditors) return undefined
    const { quickEditors } = this.props
    const editorList =
      Array.isArray(quickEditors)
        ? quickEditors
        : Object.keys(quickEditors).map(name => ({
          name,
          options: quickEditors[name]
        }))

    return editorList
      .map(editor => {
        if (Array.isArray(editor.options)) {
          return (
            <Editor.Select
              key={editor.name}
              name={editor.name}
              options={editor.options}
            />
          )
        } else if (typeof editor.options === 'boolean') {
          return (
            <Editor.Toggle
              key={editor.name}
              name={editor.name}
              defaultValue={editor.options}
            />
          )
        } else {
          return (
            <Editor.Text
              key={editor.name}
              name={editor.name}
              defaultValue={editor.options}
            />
          )
        }
      })
  }

  render () {
    const {
      Head,
      Editors: EditorContent,
      hideResizer,
      hideCode,
      children
    } = this.props
    const {
      maxWidth,
      previewHeight,
      screenWidth,
      codeView
    } = this.state

    return (
      <div className={styles.specimen}>
        <ReactResizeDetector handleWidth onResize={this.handlePageResize} />

        {
          EditorContent &&
          <Editors><EditorContent quickEditors={this.renderQuickEditors()} /></Editors>
        }

        {
          !hideResizer &&
          <Resizer
            handleResize={this.handleResize}
            maxWidth={maxWidth}
            screenWidth={screenWidth}
            previewHeight={previewHeight}
          />
        }

        <Preview
          Head={Head}
          handleResize={this.handleResize}
          maxWidth={maxWidth}
          screenWidth={screenWidth}
          hideResizer={hideResizer}
        >
          {children}
        </Preview>

        {
          !hideCode &&
          <React.Fragment>
            <Actions
              view={codeView}
              handleCodeViewReact={this.handleCodeViewReact}
              handleCodeViewHtml={this.handleCodeViewHtml}
            />

            <Code view={codeView}>{children}</Code>
          </React.Fragment>
        }
      </div>
    )
  }
}

Specimen.propTypes = {
  Head: PropTypes.any,
  Editors: PropTypes.any,
  quickEditors: PropTypes.object,
  hideResizer: PropTypes.bool,
  hideCode: PropTypes.bool,
  children: PropTypes.any
}

export default Specimen
