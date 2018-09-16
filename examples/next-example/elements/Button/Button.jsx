import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import css from './Button.css'

const Button = ({
  href,
  children,
  block,
  size,
  theme,
  ...props
}) => {
  const className = classnames(css.button, {
    [css.block]: block,
    [css.sizeSmall]: size === 'small',
    [css.sizeMedium]: size === 'medium',
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
  block: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['passive', 'positive', 'negative']),
  children: PropTypes.node
}

Button.defaultValues = {

}

export default Button
