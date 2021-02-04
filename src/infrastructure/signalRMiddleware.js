import {
    createStore
} from 'redux';

//configure store
export default function configureStore(reducer, enhancer) {
    const store = createStore(
        reducer,
        enhancer,
        // applyMiddleware(signalRMiddleware)
    );
    return store;
}

