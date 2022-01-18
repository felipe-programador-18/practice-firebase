import React, {useEffect, useReducer} from 'react';
import axios from 'axios'

const Url = 'https://testeapp-practice-default-rtdb.firebaseio.com/movimentacoes/2022-01.json'
//now i get started create usereducer  theorical he receive 2 parameter

const reducer = (state, action) => {






  return state
}


function App() {
  //now i have setflag the date to seeing in the dashboard!!!
  // with usestate
  // this example of bottom is about if wants adding a words loading...
  
  //here i am handling
  useEffect(() => {

    axios
    .get(Url)
    .then(res => {
      console.log(res)
    })

  }, [])

  

  
  return (
    <div className="App">
    <h1>try it about api</h1> 
    
    </div>
  );
}

export default App;
