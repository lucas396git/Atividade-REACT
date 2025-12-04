import PropTypes from 'prop-types'

function Textarea({ label, name, value, onChange, placeholder, rows = 4 }) {
  return (
    <label className="field">
      <span>{label}</span>
      <textarea name={name} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={rows} />
    </label>
  )
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number
}

export default Textarea
