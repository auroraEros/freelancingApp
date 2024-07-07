function RHFTextField({
  label,
  type = "text",
  name,
  validationSchema = {},
  register,
  errors,
  required,
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        className="textField__input"
        name={name}
        id={name}
        type={type}
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

export default RHFTextField;
