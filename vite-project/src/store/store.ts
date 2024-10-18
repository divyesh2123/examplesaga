import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import roorReducer from '../reducer/rootReducer';
import rootSaga from '../saga/rootSaga';


const sagaMiddeleWare = createSagaMiddleware();
const store= createStore(roorReducer,applyMiddleware(sagaMiddeleWare));

export type AppDispatch = typeof store.dispatch;
sagaMiddeleWare.run(rootSaga);

export default store;