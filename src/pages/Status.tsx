import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

const answers = [
  'concordo...', 
  'faz sentido',
  'parabens pelo progresso'
]

export function Status() {
  return (
    <main className="status">
      <Header title='Tweet' />
    <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minima sequi suscipit, obcaecati aliquid distinctio veniam aspernatur ab laborum reprehenderit dolores tenetur? Inventore ipsum nemo unde repudiandae labore asperiores eius?
"/>
      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/thalys001.png" alt="Thalys Leite" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answer => {
      return <Tweet key={answer} content={answer} />
    })}
    </main>
  )
}