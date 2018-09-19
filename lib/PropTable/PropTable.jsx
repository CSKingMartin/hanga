import PropTypes from 'prop-types'
import React from 'react'
import Editor from '../Editor/'

const Enum = ({ options }) =>
  options.join(' | ')

const Row = ({
  name,
  description,
  options,
  defaultValue
}) => {
  let type = 'string'
  const editor = <Editor hideLabel name={name} options={options} defaultValue={defaultValue} />

  if (options !== undefined) {
    type = <Enum options={options} />
  } else if (typeof defaultValue === 'boolean') {
    type = 'boolean'
  }

  return (
    <tr>
      <td><code>{name}</code></td>
      <td>{type}</td>
      <td>{description}</td>
      <td>{editor}</td>
    </tr>
  )
}

Row.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

const PropTable = ({ children }) => (
  <table>
    <thead>
      <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Description</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
)

PropTable.propTypes = {
  children: PropTypes.node
}

PropTable.Row = Row

export default PropTable
