import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice'

function App() {


  const dispatch = useDispatch()   //for working the function
  const count = useSelector((state)=>state.counter.value)     // to show the updated value in ui
  const [num, setNum] = useState(5)
  return (
    <div>
  <h1>{count}</h1>
  <button onClick={()=>{
 dispatch(increment())
  }}> 
  Increment
  </button>

  <button onClick={()=>{
   dispatch(decrement())
  }}>
    Decrement
    </button>



  <input 
  value={num}
  type="number"
  onChange={(e)=>{
    setNum(e.target.value)
  }}
  
  ></input>


    <button onClick={()=>{
   dispatch(incrementByAmount(Number(num)))
    }}>
      Increase by Amount
      </button>
    </div>
  )
}

export default App