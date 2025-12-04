import PropTypes from 'prop-types'

function SubmitButton({ children }) {
  return (
    <button className="submit" type="submit">{children}</button>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired
}

export default SubmitButton
