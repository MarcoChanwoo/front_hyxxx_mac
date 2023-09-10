// import { combineReducers } from '../../node_modules/redux/index'; // 책에서는 그냥 redux로 나옴
import { combineReducers } from 'redux'; // 책에서는 그냥 redux로 나옴
import auth from './auth';

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;
