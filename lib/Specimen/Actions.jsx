import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from './styles.module.css'

const Actions = ({
  view,
  handleCodeViewReact,
  handleCodeViewHtml
}) => (
  <div className={css.actions}>
    <div>
      <button
        className={classnames(css.actionButton, css.actionButtonLeft, view === 'react' && css.actionButton__active)}
        onClick={handleCodeViewReact}
      >
        React
      </button>
      <button
        className={classnames(css.actionButton, css.actionButtonRight, view === 'html' && css.actionButton__active)}
        onClick={handleCodeViewHtml}
      >
        HTML
      </button>
    </div>

    <div>
      <button
        className={classnames(css.actionButton, css.actionButtonSingle)}
      >
        Copy Code
      </button>
    </div>
  </div>
)

Actions.propTypes = {
  view: PropTypes.string.isRequired,
  handleCodeViewReact: PropTypes.func,
  handleCodeViewHtml: PropTypes.func
}

export default Actions
