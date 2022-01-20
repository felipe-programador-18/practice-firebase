import {useEffect, useReducer} from "react"
import axios from 'axios'

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