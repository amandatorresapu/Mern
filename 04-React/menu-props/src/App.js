import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1>hello welcome to the dojo diner</h1>
      
      <Menu name={"mac and cheese"} price={5} cals={"300"}><p><em>*its friedn squid with basil</em></p></Menu>
      <Menu name={"calimari"} price={2.99} cals={"350"}><p>fish are friends not food</p></Menu>
      <Menu name={"cheese burger"}price={3.99} cals={"100"}><p>nector of the gods</p></Menu>
      <Menu name={"sushi"}price={7.99} cals={"400"}>
      <p>its friedn squid with basil</p></Menu>
      
      
    </div>
  );
}

export default App;
