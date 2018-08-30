import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from './styles.module.css'

class Resizer extends React.Component {
  handleResize (width) {
    this.props.handleResize(width)
  }

  renderWidth (width) {
    const isInfinity = width === Infinity

    return (
      <button
        onClick={() => this.handleResize(width)}
        className={css.resizeWidthAction}
        style={{
          display: isInfinity || this.props.screenWidth > width + 140 ? 'block' : 'none',
          maxWidth: isInfinity ? undefined : `${width}px`,
          zIndex: isInfinity ? 0 : 10000 - width
        }}
      >
        { isInfinity ? 'Full Width' : `${width}px` }
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
          {this.renderWidth(1440)}
          {this.renderWidth(1180)}
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
