import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}
type AuthContextData = {
  user: User | null
  signInUrl: string
  signOut: () => void
}
type AuthResponse = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}
type AuthProvider = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)
const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=471cc36e29438e602b70`

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)
  async function signIn(githubCode: string) {
    let response = await api.post<AuthResponse>('authenticate', {
      code: githubCode
    })
    const { token, user } = response.data
    localStorage.setItem('@dowhile:token', token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)
  }
  function signOut() {
    setUser(null)
    console.log('ok')
    localStorage.removeItem('@dowhile:token')
  }
  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('profile').then(response => {
        setUser(response.data)
      })
    }
  }, [])
  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')
      window.history.pushState({}, '', urlWithoutCode)
      signIn(githubCode)
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
