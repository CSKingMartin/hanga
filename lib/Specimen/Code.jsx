import pretty from 'pretty'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'
import PropTypes from 'prop-types'
import React from 'react'
import Dom from 'react-dom/server'
import reactElementToString from 'react-element-to-string'
import StatefulContext from 'react-stateful-context'

const getTagName = (element) => {
  if (typeof element === 'string') return element
  if (typeof element.type === 'string') return element.type
  if (element.type.displayName) return element.type.displayName
  if (element.type.name) return element.type.name
  if (element.props && element.props.tagName) return element.props.tagName
  return 'unknown-element'
}

const renderReactCode = (component) => {
  if (Array.isArray(component)) {
    return component.map(renderReactCode).join('\n')
  }

  return reactElementToString(component, {
    displayName: getTagName,
    showDefaultProps: false
  })
}

const renderHtmlCode = (component) =>
  Dom.renderToStaticMarkup(component)

const getChildren = (children, context) =>
  typeof children === 'function' ? children(context) : children

const CodeView = ({ children }) =>
  <pre>
    <code dangerouslySetInnerHTML={{ __html: children }} />
  </pre>

CodeView.propTypes = {
  children: PropTypes.node
}

const Code = ({
  view = 'code',
  children
}) => (
  <StatefulContext.Consumer>
    {
      context => (
        <div className="code">
          {
            view === 'react' &&
            <div className="code-react"><CodeView>
              {
                Prism.highlight(
                  renderReactCode(getChildren(children, context)),
                  Prism.languages.jsx
                )
              }
            </CodeView></div>
          }

          {
            view === 'html' &&
            <div className="code-html"><CodeView>
              {
                Prism.highlight(
                  pretty(
                    renderHtmlCode(getChildren(children, context))
                  ),
                  Prism.languages.html
                )
              }
            </CodeView></div>
          }
        </div>
      )
    }
  </StatefulContext.Consumer>
)

Code.propTypes = {
  view: PropTypes.oneOf(['react', 'html']),
  children: PropTypes.any
}

export default Code
