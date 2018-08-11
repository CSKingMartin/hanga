import React from 'react'
import PropTypes from 'prop-types'
import StatefulContext from 'react-stateful-context'

// Editor Wrapper
export const EditorWrapper = ({
  label,
  name,
  children,
  ...rest
}) => (
  <StatefulContext.Consumer>
    {
      context =>
        <fieldset {...rest}>
          <label htmlFor={name}>{label || name}</label>
          <div>{children(context)}</div>
        </fieldset>
    }
  </StatefulContext.Consumer>
)

EditorWrapper.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

// Select Editor
export const Select = ({
  name,
  label,
  defaultValue,
  options = [],
  onChange = () => {},
  ...rest
}) => (
  <EditorWrapper name={name} label={label} {...rest}>
    {
      context =>
        <select
          id={name}
          name={name}
          value={context[name]}
          defaultValue={defaultValue}
          onChange={ev => {
            context.setContextState({ [name]: ev.target.value })
            onChange(ev)
          }}
        >
          {
            options
              .map(value => (
                typeof value === 'object'
                  ? value
                  : { value, text: value }
              ))
              .map(opt => (
                <option value={opt.value}>{opt.text}</option>
              ))
          }
        </select>
    }
  </EditorWrapper>
)

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ])
  ),
  onChange: PropTypes.func
}

// Toggle Editor
export const Toggle = ({
  name,
  label,
  defaultValue = true,
  onChange = () => {},
  ...rest
}) => (
  <EditorWrapper name={name} label={label} {...rest}>
    { context =>
      <div>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={context[name]}
          defaultChecked={defaultValue}
          onChange={ev => {
            context.setContextState({ [name]: ev.target.checked })
            onChange(ev)
          }}
        />
        <label for={name}>{label ? label : name}</label>
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

// Text Editor
export const Text = ({
  name,
  label,
  defaultValue = '',
  onChange = () => {},
  ...rest
}) => (
  <EditorWrapper name={name} label={label} {...rest}>
    { context =>
      <input
        type="text"
        id={name}
        name={name}
        value={context[name]}
        defaultValue={defaultValue}
        onChange={ev => {
          context.setContextState({ [name]: ev.target.value })
          onChange(ev)
        }}
      />
    }
  </EditorWrapper>
)

Text.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
}

// export these suckers
export default {
  Select,
  Toggle,
  Text
}
