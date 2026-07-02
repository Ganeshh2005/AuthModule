function AuthInput({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  hint,
  value,
  onChange,
  required = false,
}) {
  return (
    <label className="field-group" htmlFor={id}>
      <span className="field-label">{label}</span>
      <input
        id={id}
        name={name}
        className="field-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {hint ? <span className="field-hint">{hint}</span> : null}
    </label>
  )
}

export default AuthInput
