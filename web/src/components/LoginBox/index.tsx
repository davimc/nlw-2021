import style from './style.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'

export function LoginBox() {
  return (
    <div className={style.loginBoxWrapper}>
      <strong>Compartilhe sua mensagem</strong>

      <a href="" className={style.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  )
}
