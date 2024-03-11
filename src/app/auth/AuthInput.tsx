interface AuthInputProps {
  label: string
  value: any
  required?: boolean
  type?: 'text' | 'email' | 'password'
  renderInput?: boolean
  onChange: (newValue: any) => void
}

const AuthInput = ({ label, value, required = false, type = 'text', renderInput = true, onChange }: AuthInputProps) => {
  return renderInput ? (
    <div className="flex flex-col">
      <label>{label}</label>
      <input required={required} type={type} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  ) : null
}

export default AuthInput