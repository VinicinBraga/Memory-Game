import React from 'react'
import Cards from '../Cards/Cards'
import Refresh from '../Refresh/Refresh';
import './Game.css'


const Game = () => {
  return (
    <div className='game-container'>
      <Cards />
      <Refresh />
    </div>
  )
}

export default Game
