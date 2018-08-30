import Loadable from 'react-loadable'
import React from 'react'
import PropTypes from 'prop-types'

import Spinner from 'react-spinner'
import './styles.css'

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
  renderLoader (children) {
    const ViewerComponent = Loadable({
      loader: children,
      loading: () => <LoadingComponent />
    })

    return ViewerComponent
  }

  render () {
    if (typeof this.props.children === 'function') {
      /*
        creates an instance of 'ViewerComponent'
        that has access to this.props.children
      */
      const ViewerComponent = this.renderLoader(this.props.children)
      return <ViewerComponent />
    }
    return this.props.children
  }
}

Viewer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
}

export default Viewer
