import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import css from './Button.css'

const Button = ({
  href,
  children,
  fullWidth,
  size,
  theme,
  ...props
}) => {
  const className = classnames(css.root, {
    [css.fullWidth]: fullWidth,
    [css.sizeSmall]: size === 'small',
    [css.sizeDefault]: size === 'default',
    [css.sizeLarge]: size === 'large',
    [css.themePassive]: theme === 'passive',
    [css.themePositive]: theme === 'positive',
    [css.themeNegative]: theme === 'negative'
  })

  if (href) {
    return <a className={className} target="_parent" href={href} {...props}>{children}</a>
  }

  return <button className={className} {...props}>{children}</button>
}

Button.propTypes = {
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  theme: PropTypes.oneOf(['passive', 'positive', 'negative']),
  children: PropTypes.node
}

Button.defaultValues = {
  size: 'default',
  theme: 'passive'
}

export default Button
