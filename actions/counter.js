import store from '../mainstore'

const CounterAction = {
    increment: function(){
        store.dispatch({type: "INC"});
    },
    loadData: function(){
        // call middleware here 

        // factor action creation into separate file? - yasss 
    }
}

export default CounterAction;