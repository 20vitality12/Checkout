import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionsTypes';
import { getProducts } from '../api/rest/restController';

export function* getProductsSaga() {
    yield put({ type: ACTION.GET_PRODUCTS_REQUEST });
    try {
        const {data: products} = yield getProducts();
        yield put({ type: ACTION.GET_PRODUCTS_RESPONSE, products });
    } catch (e) {
        yield put({ type: ACTION.GET_PRODUCTS_ERROR, error: e });
    }
}

export function* pushProductSaga({product, count}) {
    yield put({ type: ACTION.PUSH_PRODUCT_REQUEST });
    try {

        product["count"] = count;
        yield put({ type: ACTION.PUSH_PRODUCT_RESPONSE, product, price: +product.price });
    } catch (e) {
        yield put({ type: ACTION.PUSH_PRODUCT_ERROR, error: e });
    }
}

export function* popProductSaga({product, count}) {
    yield put({ type: ACTION.POP_PRODUCT_REQUEST });
    try {
        product["count"] = count;
        yield put({ type: ACTION.POP_PRODUCT_RESPONSE, product, price: +product.price });
    } catch (e) {
        yield put({ type: ACTION.POP_PRODUCT_ERROR, error: e });
    }
}

export function* removeProductSaga({product, count}) {
    yield put({ type: ACTION.REMOVE_PRODUCT_REQUEST });
    try {

        yield put({ type: ACTION.REMOVE_PRODUCT_RESPONSE, product, count });
    } catch (e) {
        yield put({ type: ACTION.REMOVE_PRODUCT_ERROR, error: e });
    }
}