import './App.css';
import Form from './components/Home';
import { useState } from 'react';
import ListAmounts from './components/ListAmounts';

function App() {

  const [listAmounts, setListAmounts] = useState({
    "1": "0.00",
    "15": "0.00",
    "30": "0.00",
    "90": "0.00"
  })


  return (
    <div className="App">
      <section>
        <Form listAmounts={listAmounts} setListAmounts={setListAmounts}/>
        <ListAmounts listAmounts={listAmounts} setListAmounts={setListAmounts}/>
      </section>
    </div>
  );
}

export default App;

