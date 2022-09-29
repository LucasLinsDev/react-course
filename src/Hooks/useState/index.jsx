//whats is useState
//syntax of useState
//hpw useStaet updates state in function components
// hpw ypu manage complex states using useStates

import  React , {  Fragment , useState } from "react"

const UseSteateHookExample = () =>{
  // state item ,method , inital value


  
  const [counter,setCounter]=useState(0);
  const [data,setInfoData]=useState();
  console.log(counter);


  
  const intialState = {
    name1 : '',
    name2 : '',
  }


  const handleChange=(event)=>{
    const {name,value}=event.target;
    // console.log(name,value);

    setInfoData(prevState =>({
      ...prevState, // Copy all the state
      [name] : value // updating the state with new value
    }))

  }




  const handleClick = (prevState) => {

    setCounter({
      counter: counter + 1
    })

  }


  
  return(
  
    <Fragment>
        <input placeholder="Input one" name="name1" onChange={handleChange} />
        <input placeholder="Input one" name="name2" onChange={handleChange} />
        <button onClick={handleClick}>Counter</button>
        <p>Count value is {counter}</p>

    </Fragment>
  
    )
}

export default UseSteateHookExample;