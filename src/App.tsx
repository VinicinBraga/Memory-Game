import './App.css'
import Board from './components/Board'

function App() {


  return (
    <div className="App">
     <h1>Memory Game</h1>
      <Board cards={cards} onCardClick={(index) => this.handleCardClick(index)} />
    </div>
  )
}

export default App
