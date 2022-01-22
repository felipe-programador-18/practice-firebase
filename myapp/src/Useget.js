import {useEffect, useReducer} from "react"
import axios from 'axios'

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


export default UseGet