import style from './App.module.scss'

import { MessageList } from './components/MessageList'
import { LoginBox } from './components/LoginBox'
import { useContext } from 'react'
import { AuthContext } from './context/auth'
import { SendMessageForm } from './components/SendMessageForm'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <main
      className={`${style.contentWrapper} ${!!user ? style.contentSigned : ''}`}
    >
      <MessageList></MessageList>
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}

export default App
