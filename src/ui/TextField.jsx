function TextField({ label, type = "text", onChange, value, name }) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
      </label>
      <input
        className="textField__input"
        id={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;
