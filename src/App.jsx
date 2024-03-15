import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert("Clicked!")
  }
  const handleClick2 = () =>{
    alert("Clicked 2")
  }
  const handleClick4 = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert("Clicked 3")}}>Click Me 3</button>
      <button onClick={() => handleClick4(5)}>Click Me 4</button>
    </>
  )
}
export default App
