import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Tarjan",
    age: 21,
  }

  let newArr = [1, 2, 4, 5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="chai aur code" btnVal="click me"/>
      <Card btnVal="visit me"/>
    </>
  )
}

export default App
