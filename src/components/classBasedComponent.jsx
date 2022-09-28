import React,{Component, Fragment} from 'react';

class ClassBasedComponent extends Component{

  state={
    counter: 0,
    showMessage:false
  }

  handleClick = ()=>{
     // console.log(this.state.counter++)
      //you should not mutate the state directly
     // this.state.counter=this.state.counter +1;
      //this.state.counter = this.state.counter + 1;
      //if this i the case React will not re render tht component

      this.setState({
        counter : this.state.counter + 1
      },()=>{
        console.log(this.state);
      })
  }

  //componentdidmount ->triggers on page load
  //compoonetdidupdate -.triggers on any king of sides effects
  //componentwillunmount -> triggers when component unmounts

  componentDidMount = ()=>{
    console.log('Triggers on page load');
  }

  componentDidMount(prevProps,prevState){
    if(prevState && prevState.counter !== this.state.counter && this.state.counter === 5){
      this.setState({
       showMessage:true
      })
    }
  }

  render(){
    console.log(this.state.counter)
    return(
    <Fragment>
      <button onClick={this.handleClick}>Counter</button>
      <p>Counter value is {this.state.counter} </p>
      <p>{
        this.state.showMessage && 'Hello word'
      }</p>
    </Fragment>
    )
  }
};

export default ClassBasedComponent;