import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import css from './styles.css'

const Actions = ({
  view,
  handleCodeViewReact,
  handleCodeViewHtml
}) => (
  <div className={css.actions}>
    <button
      className={classnames(css.actionButton, view === 'react' && css.actionButton__active)}
      onClick={handleCodeViewReact}
    >
      React
    </button>
    <button
      className={classnames(css.actionButton, view === 'html' && css.actionButton__active)}
      onClick={handleCodeViewHtml}
    >
      HTML
    </button>
  </div>
)

Actions.propTypes = {
  view: PropTypes.string.isRequired,
  handleCodeViewReact: PropTypes.func,
  handleCodeViewHtml: PropTypes.func
}

export default Actions
