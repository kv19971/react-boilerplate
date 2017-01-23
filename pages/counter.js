import React from 'react'
import Number from '../components/number'
import Button from '../components/button'
import CounterStore from '../stores/counter'
import CounterAction from '../actions/counter'

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {count: CounterStore.getNum()};
    }
    handleButtonClick(e){
        //this.counterStore.increment();
        CounterAction.increment();
    }
    componentWillMount(){
        CounterStore.on("change", () => {
                this.setState({count: CounterStore.getNum()})
                console.log("change event received");
            });
    }
    render(){
        console.log("rerendered");
        return (<div><Number num={this.state.count} /><Button onClick={this.handleButtonClick} /></div>);
    }
}

export default Counter