import PropTypes from 'prop-types'
import React from 'react'
import css from './styles.module.css'

class Resizer extends React.Component {
  handleResize (width) {
    this.props.handleResize({ width })
  }

  renderWidth (width, name) {
    const isInfinity = width === Infinity

    return (
      <button
        onClick={() => this.handleResize(width)}
        className={css.resizeWidthAction}
        style={{
          display: isInfinity || this.props.screenWidth > width + 32 ? 'block' : 'none',
          maxWidth: isInfinity ? undefined : `${width}px`,
          zIndex: isInfinity ? 100 : 10000 - width
        }}
      >
        {name}
      </button>
    )
  }

  render () {
    const { maxWidth, previewHeight } = this.props
    return (
      <div className={css.resizer}>
        <div
          className={css.resizerCurrent}
          style={{ maxWidth: maxWidth === Infinity ? undefined : `${maxWidth}px` }}
        >
          <span>{ maxWidth === Infinity ? 'Full Width' : `${maxWidth}px` }</span>
          &nbsp; &times; &nbsp;
          <span>{previewHeight}px</span>
        </div>

        <div className={css.resizerWidths}>
          {this.renderWidth(Infinity, 'Full Width')}
          {this.renderWidth(2560, '4k – 2560px')}
          {this.renderWidth(1920, 'Desktop – 1920px')}
          {this.renderWidth(1440, 'Laptop Large – 1440px')}
          {this.renderWidth(1280, 'Laptop Medium – 1280px')}
          {this.renderWidth(1024, 'Laptop – 1024px')}
          {this.renderWidth(768, 'Tablet – 768px')}
          {this.renderWidth(425, 'Mobile Large – 425px')}
          {this.renderWidth(375, 'Mobile Medium – 375px')}
          {this.renderWidth(320, 'Mobile Small – 320px')}
        </div>
      </div>
    )
  }
}

Resizer.propTypes = {
  maxWidth: PropTypes.number,
  screenWidth: PropTypes.number,
  previewHeight: PropTypes.number,
  handleResize: PropTypes.func
}

export default Resizer
