import './App.css';
import Form from './components/Home';
import { useState } from 'react';

function App() {

  const [listAmounts, setListAmounts] = useState()

  return (
    <div className="App">
      <section>
        <Form listAmounts={listAmounts} setListAmounts={setListAmounts}/>
      </section>
    </div>
  );
}

export default App;

