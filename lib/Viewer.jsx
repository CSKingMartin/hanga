import Loadable from 'react-loadable'
import React from 'react'
import PropTypes from 'prop-types'

import Spinner from 'react-spinner'

const LoadingComponent = (props) => {
  if (props.error) {
    // When the loader has errored
    return <div>Error! <button onClick={props.retry}>Retry</button></div>
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return <Spinner />
  } else {
    // When the loader has just started
    return null
  }
}

class Viewer extends React.Component {
  renderLoader () {
    const ViewerComponent = Loadable({
      loader: this.props.children,
      loading: () => <LoadingComponent />
    })

    return (<ViewerComponent className="Viewer" />)
  }

  renderComponent () {
    return this.props.children
  }

  render () {
    if (typeof this.props.children === 'function') {
      return (
        <Spinner />
      )
    }

    return this.renderComponent
  }
}

Viewer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
}

export default Viewer
