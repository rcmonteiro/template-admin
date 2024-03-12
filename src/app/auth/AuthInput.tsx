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
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input 
        required={required} 
        type={type} 
        value={value} 
        onChange={e => onChange(e.target.value)}
        className="px-4 py-3 rounded-lg bg-gray-200 mt-2 border-none outline-none caret-blue-500 focus:ring ring-blue-500 focus:bg-white"
      />
    </div>
  ) : null
}

export default AuthInput