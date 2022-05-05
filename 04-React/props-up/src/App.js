import logo from './logo.svg';
import './App.css';


import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      < PersonCard firstName={"Amanda"}lastName={"Coffey"} age={22}  hairColor={"brown"} > </PersonCard>
       < PersonCard firstName={"Teola"}lastName={"Coffey"} age={19} hairColor={"brown"} > </PersonCard> 
      < PersonCard firstName={"Feona"}lastName={"Thomas"} age={38} hairColor={"Red"} > </PersonCard>
      < PersonCard firstName={"AI"}lastName={"Volleyballcoach"} age={30} hairColor={"black"} > </PersonCard> 
      
    
    </div>
  );
}

export default App;
