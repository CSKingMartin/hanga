import React from 'react'

export const Context = React.createContext({
  setContextState: () => {}
})

export const { Consumer } = Context

export class Provider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      setContextState: this.setContextState.bind(this)
    }
  }

  setContextState (newState) {
    this.setState(newState)
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default {
  Consumer,
  Provider
}
