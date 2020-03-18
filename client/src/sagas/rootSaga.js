import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionsTypes';
import {
    getProductsSaga,
    pushProductSaga,
    popProductSaga,
    removeProductSaga,
} from './productSaga';


function* rootSaga() {
    yield takeLatest(ACTION.GET_PRODUCTS_ACTION, getProductsSaga);
    yield takeLatest(ACTION.PUSH_PRODUCT_ACTION, pushProductSaga);
    yield takeLatest(ACTION.POP_PRODUCT_ACTION, popProductSaga);
    yield takeLatest(ACTION.REMOVE_PRODUCT_ACTION, removeProductSaga);
}

export default rootSaga;
