//whats is userreducer hook
//syntax of usereducer
//when you should use this
//we will create one counter exaple to undestand userreducer better

import React, { useDebugValue, useReducer } from 'react';

const reducer = (state,action) => {

  switch(action.type){
    case 'increment':
        return {
          ...state,
          counter : state.counter+1
        }
      break;
    case 'decrement':
      return {
        ...state,
        counter : state.counter -1
      }

      case 'reset':
        return {
          ...state,
          counter : state.counter =0
        }

      default:
        return state;

        break;
  }


}

const intialState = {
  counter:0
}


export const UseReducerHookExample = () => {

  const [state,dispatch]=useReducer(reducer,intialState);
  

  return (
  
        <div>
          <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
          <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
          <button>Reset</button>
          {state.counter}
        </div>
  
    )
  
}