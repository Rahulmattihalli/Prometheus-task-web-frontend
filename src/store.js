import { createStore,applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import { LoginReducer } from './reducers/loginReducer';

const composeEnhancer = compose;
const initialstate={};
const store = createStore(combineReducers({
login:LoginReducer
}),initialstate,composeEnhancer(applyMiddleware(thunk)));

export default store;