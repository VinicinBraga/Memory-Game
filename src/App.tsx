import './App.css'
import Game from './components/Game/Game';
import Refresh from './components/Refresh/Refresh';


function App() {

  return (
    <div className='app'>
      <h1 className='app-title'>Jogo da Memória</h1> 
      <Game />
      <Refresh />
    </div>
  );
}

export default App;
