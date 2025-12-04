import PropTypes from 'prop-types'

function NumberInput({ label, name, value, onChange, min, max }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type="number" name={name} value={value} onChange={e => onChange(e.target.value)} min={min} max={max} />
    </label>
  )
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number
}

export default NumberInput
