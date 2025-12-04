import PropTypes from 'prop-types'

function TextInput({ label, name, value, onChange, placeholder }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type="text" name={name} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </label>
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default TextInput
