import { useState , useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
      console.log(response);
      
      console.log(response.data);
      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <>
    <h1>hello we are on frontend</h1>
    <h2>JOKES : {jokes.length}</h2>

    {jokes.map((joke , index)=>(
      <div key={joke.id}>
          <h2>{joke.autor}</h2>
          <h2>{joke.content}</h2>
      </div>
    ))}
    </>
  )
}

export default App
