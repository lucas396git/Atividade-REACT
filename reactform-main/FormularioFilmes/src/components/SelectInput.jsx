import PropTypes from 'prop-types'

function SelectInput({ label, name, value, onChange, options }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select name={name} value={value} onChange={e => onChange(e.target.value)}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </label>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string.isRequired })).isRequired
}

export default SelectInput
