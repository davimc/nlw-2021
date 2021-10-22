import style from './style.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
  return (
    <div className={style.messageListWrapper}>
      <img src={logoImg} alt="DOWhile 2021" />

      <ul className={style.messageList}>
        <li className={style.message}>
          <p className={style.messageContent}>
            Nessa aula criaremos o front-end web da nossa aplicação utilizando
            ReactJS.
          </p>
          <div className={style.messageUser}>
            <div className={style.userImage}>
              <img src="https://github.com/davimc.png" alt="Davi Carvalho" />
            </div>
            <span>Davi Carvalho</span>
          </div>
        </li>
        <li className={style.message}>
          <p className={style.messageContent}>
            Nessa aula criaremos o front-end web da nossa aplicação utilizando
            ReactJS.
          </p>
          <div className={style.messageUser}>
            <div className={style.userImage}>
              <img src="https://github.com/davimc.png" alt="Davi Carvalho" />
            </div>
            <span>Davi Carvalho</span>
          </div>
        </li>
        <li className={style.message}>
          <p className={style.messageContent}>
            Nessa aula criaremos o front-end web da nossa aplicação utilizando
            ReactJS.
          </p>
          <div className={style.messageUser}>
            <div className={style.userImage}>
              <img src="https://github.com/davimc.png" alt="Davi Carvalho" />
            </div>
            <span>Davi Carvalho</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
