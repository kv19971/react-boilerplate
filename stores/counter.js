import EventEmitter from 'events'
import dispatcher from '../dispatcher';
class CounterS extends EventEmitter{
    constructor(){
        super();

        this.num = 0;
    }
    getNum(){
        return this.num;
    }

    increment(){
        this.num++;
        this.emit("change");
    }
    handleAction(action){
        switch(action){
            case "inc":
                this.increment();
                break;
            default:
                break;
        }
    }
}

const CounterStore = new CounterS;

dispatcher.register(CounterStore.handleAction.bind(CounterStore));

window.cs = dispatcher;
export default CounterStore;