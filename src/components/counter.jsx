import React, { Component } from 'react';

class Counter extends React.Component {
state = {
    count: 0,
    imageUrl: 'http://picsum.photos/200',
    tags: []
};

constructor() {
    super();
this.handleIncrement = this.handleIncrement.bind(this)
}

handleIncrement= product => {
    console.log(product);
    this.setState({count:this.state.count + 1});
    console.log('Increment clicked', this.state.count)
}


render() { 
return ( 
    <div>
        <span><button>{this.state.count}</button></span>

<button onClick={
    ()=> {

this.handleIncrement()
}}>Hey!</button>

       </div>
)
    }
}
    

export default Counter;