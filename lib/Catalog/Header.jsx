import React from 'react'
import PropTypes from 'prop-types'

import css from './styles.module.css'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ open: !this.state.open })
  }

  render () {
    const {
      navigation
    } = this.props

    return (
      <div className={css.shell}>
        {/* overtake */}
        <div
          className={this.state.open ? [css.overtakeActive, css.overtake].join(' ') : css.overtake}
          onClick={this.handleClick}
        />
        {/* header */}
        <div className={css.header}>
          <button className={css.hamburger} onClick={this.handleClick}>
            <span />
            <span />
            <span />
          </button>
        </div>
        {/* navigation */}
        <div className={this.state.open ? [css.navOpen, css.nav].join(' ') : css.nav}>
          {navigation}
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  navigation: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
}

export default Header
