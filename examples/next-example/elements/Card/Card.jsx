import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import css from './Card.css'

const Card = ({
  children,
  ...props
}) => {
  const className = classnames(css.root)
  return <div className={className} {...props}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card
