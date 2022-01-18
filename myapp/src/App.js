import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios'


const Url = 'https://testeapp-practice-default-rtdb.firebaseio.com/movimentacoes/2022-01.json'

//now i get started create usereducer  theorical he receive 2 parameter

const reducer = (state, action) => {
 
  //handling stage
 //how Use reducer

 if(action.type === 'REQUEST'){
   return {
     ...state,
     loading:true
   }
 }

 if(action.type ==='SUCCESS'){
   return {
     ...state,
     loading:false,
     data: action.data
   }
 }

  return state
}

function App() {
  //now i have setflag the date to seeing in the dashboard!!!
  // with usestate
  // this example of bottom is about if wants adding a words loading...
  
  //here i am handling
  const [data, dispacth] = useReducer(reducer,{
    loading: true,
    data: {}
  } )

  useEffect(() => {
   
    dispacth({type:'REQUEST'})
    axios
    .get(Url)
    .then(res => {
        dispacth({type:'SUCCESS', data: res.data})}
        )

  }, [])

  
  return (
    <div className="App">
     <h1>My money test Api</h1> 
     {JSON.stringify(data)}
     {data.loading && <p>Loading .....</p>}
    
    </div>
  );
}

export default App;
