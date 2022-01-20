import React, {useEffect, useReducer} from 'react';
import axios from 'axios'


const Url = "https://testeapp-practice-default-rtdb.firebaseio.com/movimentacoes.json"

const reducer = (state,action) =>{

if(action.type === 'REQUEST'){
return {
  ...state ,
  loading: true
}}

if(action.type === 'SUCCESS'){
  return {
    ...state,
    loading: false,
    data: action.data
  }
}
  return state
}

// here always flag date and dispatch
// now i have setflag use usereducer



function App(){  
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {}
  })

  useEffect(() =>{
    dispatch({type:'REQUEST'})
   axios
   .get(Url)
   .then(res =>{
     dispatch({type: 'SUCCESS', data: res.data})
   })
 }, [])

  return (
    <div className="App">
    <h1>try it about api</h1> 
    {JSON.stringify(data) }
     {data.loading && <p>loading</p>}
    </div>
  );
}

export default App;
