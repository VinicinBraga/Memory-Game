import Card from "../components/Card";
import Grid from "../components/Grid";
import "./styles.css";
import { cards } from "../data/cards";

import logo from "../assets/Animals-removebg-preview.png";

function App() {
  return (
    <div className="app">
      <img className="logo" src={logo} alt="logo"></img>
      <Grid cards={cards} />
    </div>
  );
}

export default App;
