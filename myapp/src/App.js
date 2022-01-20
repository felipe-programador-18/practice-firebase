import React from 'react';
import UseGet from './Useget';


const Url = "https://testeapp-practice-default-rtdb.firebaseio.com/movimentacoes.json"

function App(){  
  //is pure functions !!
  const data = UseGet(Url)
  const data2 = UseGet('https://httpbin.org/ip')
  
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
