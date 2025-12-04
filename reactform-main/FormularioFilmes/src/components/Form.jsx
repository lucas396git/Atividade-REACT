import PropTypes from 'prop-types'

function Form({ onSubmit, children }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Form
