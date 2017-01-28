import Axios from 'axios'
import store from '../mainstore'

function makeAction(type, status, payload){
    return {
        type: type,
        status: status,
        payload: payload
    };
}

function dispatchAction(action){
    store.dispatch(action);
}

function dispatchAsyncAction(data, req){
    // dispatch action with status loading/pending 
    // make async call 
    //      if success then respond with success and payload 
    //      if error then respond with error and error message (optional)
    let action = Object.create({}, data, {status: "loading"});
    dispatchAction(action);

    Axios({
        method: req.method,
        url: req.url,
        data: req.data,
    }).then(
        (res) => {
            action.status = "success";
            action.payload = res;

            dispatchAction(action);
        }
    ).catch(
        (error) => {
            action.status = "error";
            action.payload = error;

            dispatchAction(action);
        }
    );
}

export {makeAction, dispatchAction, dispatchAsyncAction}