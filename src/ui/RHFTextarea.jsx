function RHFTextarea({
  label,
  name,
  validationSchema = {},
  register,
  errors,

  rows = 4,
  className = "textField__input",
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
      </label>
      <textarea
        className={className}
        name={name}
        id={name}
        rows={rows}
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFTextarea;
