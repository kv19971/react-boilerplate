import React from 'react'
import Number from '../components/number'
import Button from '../components/button'
import CounterStore from '../stores/counter'
import CounterAction from '../actions/counter'

class Counter extends React.Component{
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
        return (<div><Number num={this.props.count} /><Button onClick={this.handleButtonClick} /></div>);
    }
}
function mapStateToProps(state){
    return {
        count: state.counter.num
    };
}

export default connect(mapStateToProps)(Counter)

