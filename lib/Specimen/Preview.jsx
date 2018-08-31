import React from 'react'
import PropTypes from 'prop-types'
import Frame from 'react-frame-component'
import StatefulContext from 'react-stateful-context'

import DragResizer from './DragResizer'
import css from './styles.module.css'

export const SpecimenHead = () => <React.Fragment />

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.$iframe = React.createRef()

    this.handleFrameHeight = this.handleFrameHeight.bind(this)
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

  render () {
    const {
      Head = SpecimenHead,
      maxWidth,
      screenWidth,
      handleResize,
      children
    } = this.props

    return (
      <div className={css.preview}>
        <div
          className={css.previewFrameWrapper}
          style={{ maxWidth: maxWidth === Infinity ? undefined : `${maxWidth}px` }}
        >
          <StatefulContext.Consumer>
            {
              context =>
                <Frame
                  ref={this.$iframe}
                  head={<Head />}
                  className={css.previewFrame}
                  contentDidMount={this.handleFrameHeight}
                  contentDidUpdate={this.handleFrameHeight}
                >
                  {typeof children === 'function' ? children(context) : children}
                </Frame>
            }
          </StatefulContext.Consumer>
        </div>

        <DragResizer
          maxWidth={maxWidth}
          screenWidth={screenWidth}
          handleResize={handleResize}
        />
      </div>
    )
  }
}

Preview.propTypes = {
  Head: PropTypes.any,
  maxWidth: PropTypes.number,
  screenWidth: PropTypes.number,
  handleResize: PropTypes.func,
  children: PropTypes.any
}

Preview.defaultValue = {
  Head: SpecimenHead
}

export default Preview
