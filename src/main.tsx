import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Tweet user='Thalys' likes={10}>
      meu primeiro tweet
      </Tweet>

      <Tweet user='Vitor'>
        hello world
      </Tweet>

      <Tweet user='Gabriel'>
        Testando
      </Tweet>

      <Tweet user='Rafael'>
        Conteudo 4
        </Tweet>
    </div>
  </React.StrictMode>,
)

// Componentes: pequenas partes de interfaces reutilizaveis


// const editUser = false
{/* <p>teste</p>
<button type='submit' >{editUser ? 'editar usuário' : 'criar usuário'}</button> */}