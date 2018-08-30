import PropTypes from 'prop-types'
import React from 'react'
import css from './styles.module.css'

const Editors = ({ children }) =>
  <div className={css.editors}>
    {children}
  </div>

Editors.propTypes = {
  children: PropTypes.any
}

export default Editors
