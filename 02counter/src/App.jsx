import { useState } from "react";
import "./App.css";

function App() {
  let[counter, setCounter] = useState(15);

  const addValue = () =>{
    if(counter >=20){
      alert('Value of counter cant be set greater than 20');
    }
    else{
      setCounter((counter)=> counter + 1);
    }
  }

  const reduceValue = () =>{
    if(counter <= 0){
      alert('Value of counter cant be set negative');
    }
    else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
       <h1>Chai aur react {counter}</h1>
       <h2>Counter value {counter}</h2>

       <button
       onClick={addValue}
       >Add value</button>
       <br />
       <button
       onClick={reduceValue}
       >remove value {counter}</button>
       <p>footer: {counter}</p>
    </>
  );
}

export default App;
