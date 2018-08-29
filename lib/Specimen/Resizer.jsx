import PropTypes from 'prop-types'
import React from 'react'
import css from './styles.css'

const Resizer = ({ handleResize, children }) =>
  <div className={css.resizer}>
    {children}
  </div>

Resizer.propTypes = {
  handleResize: PropTypes.func,
  children: PropTypes.any
}

export default Resizer
