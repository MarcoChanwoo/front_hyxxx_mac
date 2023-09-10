// import { combineReducers } from '../../node_modules/redux/index'; // 책에서는 그냥 redux로 나옴
import { combineReducers } from 'redux'; // 책에서는 그냥 redux로 나옴
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    auth,
    loading,
});

export function* rootSaga() {
    yield all([authSaga()]);
}

export default rootReducer;
