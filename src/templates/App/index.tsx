
import Card from '../../components/Card'
import Grid from '../../components/Grid'
import './styles.css'
import { cards } from '../../data/cards';



function App() {
  return (
    <div className="app">
      <p className="title">MEMORY GAME</p>
      <Grid cards={cards} />
   </div>
  )
}

export default App
