import React from 'react'
import PropTypes from 'prop-types'
import Frame from 'react-frame-component'
import StatefulContext from 'react-stateful-context'

import styles from './styles.module.css'

export const SpecimenHead = () => <React.Fragment />

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.handleFrameHeight = this.handleFrameHeight.bind(this)
    this.$iframe = React.createRef()
  }

  componentDidMount () {
    this.handleFrameHeight()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.maxWidth !== this.props.maxWidth) {
      this.handleFrameHeight()
    }
  }

  onResize () {
    const iframe = this.$iframe.current.node
    iframe.height = `${iframe.contentWindow.document.body.scrollHeight + 32}px`
  }

  handleFrameHeight () {
    setTimeout(() => {
      this.onResize()
    })
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
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  Head: PropTypes.any,
  maxWidth: PropTypes.number,
  children: PropTypes.any
}

Preview.defaultValue = {
  Head: SpecimenHead
}

export default Preview
