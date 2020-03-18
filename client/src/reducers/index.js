import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productReducer from './productReducer';

const appReducer = combineReducers({
    productReducer,
    form: formReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
