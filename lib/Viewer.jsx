// import Loadable from 'react-loadable'
import React from 'react'
import PropTypes from 'prop-types'

const LoadingComponent = (props) => {
  if (props.error) {
    return (
      <div>Sorry!</div>
    )
  } else {
    return (
      <div>Loading..</div>
    )
  }
}

// const ViewerComponent = (props) => Loadable({
//   loader: () => import(props.path),
//   loading: () => <LoadingComponent />,
//   delay: 5000
// })

class Viewer extends React.Component {
  render () {
    const {
      path
    } = this.props

    return (
      <LoadingComponent className="Viewer" path={path} />
    )
  }
}

Viewer.propTypes = {
  path: PropTypes.string
}

export default Viewer
