import PropTypes from 'prop-types'
import React from 'react'
import css from './styles.module.css'

const Editors = ({ children }) => {
  return (
    React.Children.toArray(children).filter(a => a).length > 0
      ? <div className={css.editors}>{children}</div>
      : <div />
  )
}

Editors.propTypes = {
  children: PropTypes.any
}

export default Editors
