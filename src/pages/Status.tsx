import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'concordo...',
    'faz sentido',
    'parabens pelo progresso'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  return (
    <main className="status">
      <Header title='Tweet' />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minima sequi suscipit, obcaecati aliquid distinctio veniam aspernatur ab laborum reprehenderit dolores tenetur? Inventore ipsum nemo unde repudiandae labore asperiores eius?
"/>
      <Separator />

      <form  onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/thalys001.png" alt="Thalys Leite" />
          <textarea id="tweet" 
          placeholder="Tweet your answer" 
          value={newAnswer}
          onChange={(event) => {
              setNewAnswer(event.target.value)
          }}
          />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}