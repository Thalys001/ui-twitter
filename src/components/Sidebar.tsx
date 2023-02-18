import twitterLogo from '../assets/logo-twitter.svg'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from 'phosphor-react'

import './Sidebar.css'

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src={twitterLogo} alt="Logo" />
      <nav className='main-navigation'>
        <a className='active' href="">
          <House weight='fill' />
          Home
        </a>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell />
          Notification</a>
        <a href="">
          <Envelope />
          Message</a>
        <a href="">
          <BookmarkSimple />
          Bookmarks</a>
        <a href="">
          <FileText />
          Lists</a>
        <a href="">
          <User />
          Profile</a>
        <a href="">
          <DotsThreeCircle />
          More</a>
      </nav>
      <button className='new-tweet' type='button' >Tweet</button>
    </aside>
  )
}