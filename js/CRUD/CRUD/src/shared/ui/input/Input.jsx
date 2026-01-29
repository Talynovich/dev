const Input = ({ value, onChange, handleKeyDown }) => {
  return (
    <input
      type="text"
      className="form-control mb-2 mr-sm-2"
      id="todo"
      placeholder="add todo mame"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  )
}
export default Input
