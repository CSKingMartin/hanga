import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from './styles.css'

class Resizer extends React.Component {
  handleResize (width) {
    this.props.handleResize(width)
  }

  renderWidth (width) {
    return (
      <button
        onClick={() => this.handleResize(width)}
        className={css.resizeWidthAction}
        style={{
          display: this.props.screenWidth > width ? 'block' : 'block',
          maxWidth: width === Infinity ? undefined : `${width}px`,
          zIndex: 10000 - width
        }}
      >
        { width === Infinity ? 'Full Width' : `${width}px` }
      </button>
    )
  }

  render () {
    const { maxWidth } = this.props
    return (
      <div className={css.resizer}>
        <div
          className={css.resizerHandles}
          style={{ maxWidth: maxWidth === Infinity ? undefined : `${maxWidth}px` }}
        >
          <button className={classnames(css.resizeHandle, css.resizerHandleLeft)} />
          <button className={classnames(css.resizeHandle, css.resizerHandleRight)} />
        </div>

        <div className={css.resizerWidths}>
          {this.renderWidth(Infinity)}
          {this.renderWidth(1360)}
          {this.renderWidth(1140)}
          {this.renderWidth(960)}
          {this.renderWidth(800)}
          {this.renderWidth(640)}
          {this.renderWidth(480)}
          {this.renderWidth(320)}
        </div>
      </div>
    )
  }
}

Resizer.propTypes = {
  maxWidth: PropTypes.number,
  screenWidth: PropTypes.number,
  handleResize: PropTypes.func
}

export default Resizer
