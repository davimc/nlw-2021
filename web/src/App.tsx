import style from './App.module.scss'

import { MessageList } from './components/MessageList'
import { LoginBox } from './components/LoginBox'

function App() {
  return (
    <main className={style.contentWrapper}>
      <MessageList></MessageList>
      <LoginBox></LoginBox>
    </main>
  )
}

export default App
