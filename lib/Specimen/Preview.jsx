import React from 'react'
import PropTypes from 'prop-types'
import Frame from 'react-frame-component'
import StatefulContext from 'react-stateful-context'

import styles from './styles.css'

export const SpecimenHead = () => <React.Fragment />

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.handleFrameMount = this.handleFrameMount.bind(this)
    this.$iframe = React.createRef()
  }

  componentDidMount () {
    this.handleFrameMount()
  }

  onResize () {
    const iframe = this.$iframe.current.node
    iframe.height = `${iframe.contentWindow.document.body.scrollHeight + 32}px`
  }

  handleFrameMount () {
    setTimeout(() => {
      this.onResize()
    })
  }

  render () {
    const {
      Head = SpecimenHead,
      children
    } = this.props

    return (
      <div className={styles.preview}>
        <StatefulContext.Consumer>
          {
            context =>
              <Frame
                ref={this.$iframe}
                head={<Head />}
                className={styles.previewFrame}
                contentDidMount={this.handleFrameMount}
              >
                {typeof children === 'function' ? children(context) : children}
              </Frame>
          }
        </StatefulContext.Consumer>
      </div>
    )
  }
}

Preview.propTypes = {
  Head: PropTypes.any,
  children: PropTypes.any
}

Preview.defaultValue = {
  Head: SpecimenHead
}

export default Preview
