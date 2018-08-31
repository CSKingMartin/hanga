import Draggable from 'react-draggable'
import React from 'react'
import PropTypes from 'prop-types'
import Frame from 'react-frame-component'
import StatefulContext from 'react-stateful-context'

import styles from './styles.module.css'

export const SpecimenHead = () => <React.Fragment />

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.$iframe = React.createRef()

    this.handleFrameHeight = this.handleFrameHeight.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }

  componentDidMount () {
    this.handleFrameHeight()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.maxWidth !== this.props.maxWidth) {
      this.handleFrameHeight()
    }
  }

  handleFrameHeight () {
    setTimeout(() => {
      const iframe = this.$iframe.current.node
      iframe.height = `${iframe.contentWindow.document.body.scrollHeight + 32}px`
    })
  }

  handleStart () {

  }

  handleDrag () {

  }

  handleStop () {

  }

  render () {
    const {
      Head = SpecimenHead,
      maxWidth,
      children
    } = this.props

    return (
      <div className={styles.preview}>
        <div
          className={styles.previewFrameWrapper}
          style={{ maxWidth: maxWidth === Infinity ? undefined : `${maxWidth}px` }}
        >
          <StatefulContext.Consumer>
            {
              context =>
                <Frame
                  ref={this.$iframe}
                  head={<Head />}
                  className={styles.previewFrame}
                  contentDidMount={this.handleFrameHeight}
                  contentDidUpdate={this.handleFrameHeight}
                >
                  {typeof children === 'function' ? children(context) : children}
                </Frame>
            }
          </StatefulContext.Consumer>

          <Draggable
            axis="x"
            handle={styles.previewDragHandle}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          >
            <div className={styles.previewDrag}>
              <div className={styles.previewDragHandle} />
            </div>
          </Draggable>
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  Head: PropTypes.any,
  maxWidth: PropTypes.number,
  handleResize: PropTypes.func,
  children: PropTypes.any
}

Preview.defaultValue = {
  Head: SpecimenHead
}

export default Preview
