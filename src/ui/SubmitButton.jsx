function SubmitButton({className="",children}) {
  return (
    <button type="submit" className={`btn btn--primary w-full ${className}`}>
      {children}
    </button>
  )
}

export default SubmitButton

