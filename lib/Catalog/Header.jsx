import React from 'react'
import PropTypes from 'prop-types'

// import hamburger from './assets/menu.svg'
// import close from './assets/close.svg'
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
    console.log('hi mom')
    this.setState({ open: !this.state.open })
  }

  render () {
    const {
      navigation
    } = this.props

    return (
      <div className={css.shell}>
        {/* overtake */}
        <div className={css.overtake} />
        {/* header */}
        <div className={css.header}>
          <button className={css.hamburger} onClick={this.handleClick}>
            <span />
            <span />
            <span />
          </button>
        </div>
        {/* navigation */}
        <div className={this.state.open ? [css.navOpen, css.nav].join(' ') : [css.navClosed, css.nav].join(' ')}>
          {navigation}
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  navigation: PropTypes.func
}

export default Header
