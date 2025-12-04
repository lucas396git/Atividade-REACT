import PropTypes from 'prop-types'

function RadioGroup({ label, name, value, onChange, options }) {
  return (
    <fieldset className="field">
      <legend>{label}</legend>
      <div className="radios">
        {options.map(opt => (
          <label key={opt.value} className="radio">
            <input type="radio" name={name} value={opt.value} checked={String(value) === String(opt.value)} onChange={e => onChange(e.target.value)} />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, label: PropTypes.string.isRequired })).isRequired
}

export default RadioGroup
