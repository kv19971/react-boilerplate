import store from '../mainstore'

const CounterAction = {
    increment: function(){
        store.dispatch({type: "inc"});
    }
}

export default CounterAction;