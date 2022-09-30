import React from 'react'
import Champs from '../champs/Champs'
import Header from '../header/Header'
import Menu from '../menu/Menu'

export default function Home() {
  return (
    <div>
      <Header/>
      <main className='main'>
      <Menu/>
      <Champs/>
      </main>
    </div>
  )
}
