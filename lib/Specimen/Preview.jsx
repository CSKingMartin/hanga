import React from 'react'
import PropTypes from 'prop-types'
import Frame from 'react-frame-component'
import StatefulContext from 'react-stateful-context'

export const SpecimenHead = () =>
  <React.Fragment>
    <style src="/styles.css" />
  </React.Fragment>

class Preview extends React.Component {
  render () {
    const {
      Head = SpecimenHead,
      children
    } = this.props

    return (
      <div className="preview">
        <StatefulContext.Consumer>
          {
            context =>
              <Frame
                head={<Head />}
              >
                {typeof children === 'function' ? children(context) : children}
              </Frame>
          }
        </StatefulContext.Consumer>
      </div>
    )
  }
}

Preview.propTypes = {
  Head: PropTypes.any,
  children: PropTypes.any
}

Preview.defaultValue = {
  Head: SpecimenHead
}

export default Preview
