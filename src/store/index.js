import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootRerucer = combineReducers({

});

export default createStore(rootRerucer, applyMiddleware(thunk));
