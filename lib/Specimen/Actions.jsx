import PropTypes from 'prop-types'
import React from 'react'

const Actions = (props) =>
  <div className="actions">
    <button onClick={props.handleCodeViewReact}>React</button>
    <button onClick={props.handleCodeViewHtml}>HTML</button>
    <button onClick={props.handleFullWidth}>Full Width</button>
  </div>

Actions.propTypes = {
  handleCodeViewReact: PropTypes.func,
  handleCodeViewHtml: PropTypes.func,
  handleFullWidth: PropTypes.func
}

export default Actions
