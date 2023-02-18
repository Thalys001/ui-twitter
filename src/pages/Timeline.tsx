import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"



const tweets = [
  'meu primeiro tweet',
  'teste',
  'deu certo tweetar'
]

import './Timeline.css'

export function Timeline() {
  return (
    <main className="timeline">
    <Header title='Home' />


    <form className="new-tweet-form">
      <label htmlFor="tweet">
        <img src="https://github.com/thalys001.png" alt="Thalys Leite" />
        <textarea id="tweet" placeholder="What's happenning?" />
      </label>

      <button type='submit'>Tweet</button>
    </form>
    <Separator />

    {tweets.map(tweet => {
      return <Tweet key={tweet} content={tweet} />
    })}
  </main>
  )
}