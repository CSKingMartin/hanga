import React from 'react'
import PropTypes from 'prop-types'
import Frame from 'react-frame-component'
import StatefulContext from 'react-stateful-context'

export const SpecimenHead = () =>
  <React.Fragment>
    <style src="/styles.css" />
  </React.Fragment>


class Specimen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isFullScreen: false,
      codeView: 'react'
    }

    this.handleCodeViewReact = this.handleCodeViewReact.bind(this)
    this.handleCodeViewHtml = this.handleCodeViewHtml.bind(this)
    this.handleFullScreen = this.handleFullScreen.bind(this)
  }

  handleCodeViewReact () {
    this.setState({ codeView: 'react' })
  }

  handleCodeViewHtml () {
    this.setState({ codeView: 'html' })
  }

  handleFullScreen () {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    })
  }

  render () {
    const {
      Head = SpecimenHead,
      Editors,
      children
    } = this.props

    return (
      <div className="specimen">
        {
          Editors &&
          <div className="editors">
            <Editors />
          </div>
        }

        <div className="preview">
          {this.state.isFullScreen && 'is-fullscreen'}
          <StatefulContext.Consumer>
            { context =>
              <Frame head={<Head />}>
                {typeof children === 'function' ? children(context) : children}
              </Frame>
            }
          </StatefulContext.Consumer>
        </div>

        <div className="actions">
          <button onClick={this.handleCodeViewReact}>React</button>
          <button onClick={this.handleCodeViewHtml}>HTML</button>
          <button onClick={this.handleFullScreen}>Fullscreen</button>
        </div>

        <div className="code">
          {
            this.state.codeView === 'react' &&
            <div className="code-react">
              <code><pre>
                {`Ullamco consectetur irure ipsum ipsum \ntempor cillum irure aliqua occaecat \nelit duis id in. Laborum id consectetur \neu qui commodo laborum dolore mollit duis.`}
              </pre></code>
            </div>
          }

          {
            this.state.codeView === 'html' &&
            <div className="code-html">
              <code><pre>
                {`Minim enim do nostrud sit sit Lorem \nvoluptate exercitation culpa velit occaecat. \ntempor cillum irure aliqua occaecat \nelit duis id in. Laborum id consectetur \neu qui commodo laborum dolore mollit duis.`}
              </pre></code>
            </div>
          }
        </div>
      </div>
    )
  }
}

Specimen.propTypes = {
  Head: PropTypes.any,
  Editors: PropTypes.any,
  children: PropTypes.any
}

export default Specimen
