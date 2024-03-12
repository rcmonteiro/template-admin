'use client'

import { useState } from "react"
import AuthInput from "./AuthInput"
import Image from "next/image"
import { WarningIcon } from "@/components/icons"
import { useAuthData } from "@/data/hook/useAuthData"

const Page = () => {
  const authCxt = useAuthData()

  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string|null>(null)

  const submit = async () => {
    try {
      if (mode === 'signin') {
          await authCxt.signin(email, password)
      } else {
        await authCxt.signup(email, password)
      }    
    } catch(e) {
      console.log("sdfsdfsdf ",e)
      // setError("Erro!")
    }
  }

  const showError = (message: string, time: number = 5) => {
    setError(message)
    setTimeout(() => setError(null),(time*1000))
  }

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="relative self-stretch hidden md:block md:w-1/2 lg:w-2/3">
        <Image
          alt="Acesse a plataforma - imagem"
          src="https://source.unsplash.com/random"
          fill
          objectFit="cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-5">
          {
            mode === 'signin' ? 'Entre em sua conta' : 'Cadastre-se na plataforma'
          }
        </h1>

        { error ? <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
          {WarningIcon()}
          <span className="ml-3">{error}</span>
        </div> : null }

        <AuthInput label="E-mail" type="email" value={email} onChange={setEmail}/>
        <AuthInput label="Senha" type="password" value={password} onChange={setPassword}/>
        <button 
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
          onClick={() => submit('email')}>
          {
            mode === 'signin' ? 'Entrar' : 'Cadastre-se'
          }
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button 
          className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3"
          onClick={authCxt.loginGoogle}>
          Entrar com o Google
        </button>

        {
          mode === 'signin' ? (
            <p className="mt-8 text-center">
              Novo por aqui?<br />
              <a 
                onClick={() => setMode('signup')}
                className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
              >Crie uma conta gratuitamente</a>
            </p>
          ) : (
            <p className="mt-8 text-center">
              Já faz parte da nossa comunidade?<br />
              <a 
                onClick={() => setMode('signin')}
                className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
              > 
                Entre com a sua conta
              </a>
            </p>
          )
        }
      </div>
    </div>
  )
}

export default Page