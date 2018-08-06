import React from 'react'
import EditorContext from './EditorContext'

export const EditorWrapper = ({
  name,
  label,
  children,
  ...rest
}) => {
  return (
    <fieldset {...rest}>
      <label for={name}>{label ? label : name}</label>
      <div>{children}</div>
    </fieldset>
  )
}

export const Select = ({
  name,
  label,
  defaultValue,
  options = [],
  onChange = () => {},
  ...rest
}) => (
  <EditorContext.Consumer>
    { context =>
      <EditorWrapper name={name} label={label} {...rest}>
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
      </EditorWrapper>
    }
  </EditorContext.Consumer>
)

export const Toggle = ({
  name,
  label,
  defaultValue = true,
  onChange = () => {},
  ...rest
}) => (
  <EditorContext.Consumer>
    { context =>
      <EditorWrapper name={name} label={label} {...rest}>
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
      </EditorWrapper>
    }
  </EditorContext.Consumer>
)

export const Text = ({
  name,
  label,
  defaultValue = '',
  onChange = () => {},
  ...rest
}) => (
  <EditorContext.Consumer>
    { context =>
      <EditorWrapper name={name} label={label} {...rest}>
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
      </EditorWrapper>
    }
  </EditorContext.Consumer>
)

export default {
  Select,
  Toggle,
  Text
}
