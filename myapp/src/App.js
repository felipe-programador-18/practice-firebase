import React, {useEffect, useReducer} from 'react';
import axios from 'axios'


const Url = "https://testeapp-practice-default-rtdb.firebaseio.com/movimentacoes.json"


// i always create new function about reduce he receive two state (state and action) always remember this!!!
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

  const UseGet = Url => {
    // when i set data i need invoke data and dispatch always
    // the dispatch he always going dispatch two way request and success
    const [data, dispatch] = useReducer(reducer, {loading: true,data: {}})
        useEffect(() =>{
          dispatch({type:'REQUEST'})
         axios
         .get(Url)
         .then(res =>{
           dispatch({type: 'SUCCESS', data: res.data})
         })
       }, [])
       return data
  }


function App(){  
  //is pure functions !!
  const data = UseGet(Url)
  const data2 = UseGet("https://testeapp-practice-default-rtdb.firebaseio.com/movimentacoes.json")
  
  return (
    <div className="App">
    <h1>try it about api</h1> 
    {JSON.stringify(data) }
     {data.loading && <p>loading</p>}
     
     <pre>
       {JSON.stringify(data2)}
      </pre> 
    </div>
  );
}

export default App;
