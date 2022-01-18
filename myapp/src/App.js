import React, {useEffect, useReducer} from 'react';
import axios from 'axios'

const Url = 'https://testeapp-practice-default-rtdb.firebaseio.com/movimentacoes/2022-01.json'
//now i get started create usereducer  theorical he receive 2 parameter

const reducer = (state, action) => {

 if(action.type === 'REQUEST'){
   return{  ...state,
    loading: true 
  }
 }

 if(action.type ==='SUCCESS'){
   return {
     ...state ,
     loading : false,
     data: action.data
   }
 }



  return state
}


function App() {
  const [data, dispatch] = useReducer(reducer , {
    loading: true,
    data : {}
  })
  
  //here i am handling
  useEffect(() => {
    dispatch ({type: 'REQUEST'})
    axios
    .get(Url)
    .then(res => {
      dispatch({type:'SUCCESS', data: res.data})
    })

  }, [])

  

  
  return (
    <div className="App">
    <h1>try it about api</h1> 
    {JSON.stringify(data)}
    {data.loading && <p> Loading ... </p>}
    
    </div>
  );
}

export default App;
