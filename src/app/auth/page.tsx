'use client'

import { useState } from "react"
import AuthInput from "./AuthInput"

const Page = () => {
  
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1>Auth</h1>
      <AuthInput label="E-mail" type="email" value={email} onChange={setEmail}/>
      <AuthInput label="Senha" type="password" value={password} onChange={setPassword}/>
    </div>
  )
}

export default Page