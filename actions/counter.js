import dispatcher from '../dispatcher'

const CounterAction = {
    increment: function(){
        dispatcher.dispatch("inc");
    }
}

export default CounterAction;