import React from 'react'
import PropTypes from 'prop-types'
import EditorWrapper from './EditorWrapper'

// Toggle Editor
const Toggle = ({
  name,
  label,
  defaultValue = true,
  onChange = () => {},
  ...rest
}) => (
  <EditorWrapper name={name} label={label} defaultValue={defaultValue} {...rest}>
    { context =>
      <div>
        <input
          type="checkbox"
          id={name}
          name={name}
          defaultChecked={defaultValue}
          onChange={ev => {
            context.setContextState({ [name]: ev.target.checked })
            onChange(ev)
          }}
        />
        <label htmlFor={name}>{label || name}</label>
      </div>
    }
  </EditorWrapper>
)

Toggle.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func
}

export default Toggle
