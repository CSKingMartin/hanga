import classnames from 'classnames'
import Draggable from 'react-draggable'
import React from 'react'
import PropTypes from 'prop-types'

import css from './styles.module.css'

export const SpecimenHead = () => <React.Fragment />

class Preview extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      offset: 0,
      activeDragger: false
    }

    this.handleDrag = this.handleDrag.bind(this)
    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDragStop = this.handleDragStop.bind(this)
  }

  handleDrag (_, { x }) {
    const offset = Math.abs(x)
    const newWidth = this.props.screenWidth - (offset * 2)

    // 32 is left/right padding, this should probably be calculated
    this.props.handleResize({
      width: newWidth < this.props.screenWidth ? newWidth - 32 : Infinity
    })
  }

  handleDragStart (side) {
    this.setState({ activeDragger: side })
  }

  handleDragStop () {
    this.setState({ activeDragger: false })
  }

  componentDidUpdate ({ maxWidth: prevMaxWidth, screenWidth: prevScreenWidth }) {
    const { maxWidth, screenWidth } = this.props

    // when the screen is resized or max width is changes by the resizer
    // the offset position of the drag handlers should be updated
    if (prevScreenWidth !== screenWidth || prevMaxWidth !== maxWidth) {
      const offset =
        (maxWidth <= screenWidth && maxWidth !== Infinity)
          ? (screenWidth - 32) / 2 - maxWidth / 2
          : 0

      this.setState({ offset }) // eslint-disable-line
    }
  }

  render () {
    return (
      <div className={css.dragWrapper}>
        <Draggable
          axis="x"
          handle={`.${css.dragHandle}`}
          onDrag={this.handleDrag}
          onStart={() => this.handleDragStart('left')}
          onStop={() => this.handleDragStop()}
          position={{ x: this.state.offset, y: 0 }}
          bounds={{
            left: 0,
            right: (this.props.screenWidth / 2) - 120
          }}
        >
          <div className={classnames(css.drag, css.dragLeft)}>
            <div className={classnames(
              css.dragHandle,
              this.state.activeDragger === 'left' && css.dragHandleActive
            )} />
          </div>
        </Draggable>

        <Draggable
          axis="x"
          handle={`.${css.dragHandle}`}
          onDrag={this.handleDrag}
          onStart={() => this.handleDragStart('right')}
          onStop={() => this.handleDragStop()}
          position={{ x: -1 * this.state.offset, y: 0 }}
          bounds={{
            left: -1 * ((this.props.screenWidth / 2) - 120),
            right: 0
          }}
        >
          <div className={classnames(css.drag, css.dragRight)}>
            <div className={classnames(
              css.dragHandle,
              this.state.activeDragger === 'right' && css.dragHandleActive
            )} />
          </div>
        </Draggable>
      </div>
    )
  }
}

Preview.propTypes = {
  maxWidth: PropTypes.number,
  screenWidth: PropTypes.number,
  handleResize: PropTypes.func
}

export default Preview
