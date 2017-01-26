import store from '../mainstore'

const CounterAction = {
    increment: function(){
        store.dispatch({type: "INC"});
    }
}

export default CounterAction;