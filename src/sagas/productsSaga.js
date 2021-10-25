import {all, takeEvery, fork, call, put} from 'redux-saga/effects';
import axiosInstance from '../utils/axiosInstance';

function* loadProducts() {
  try {
    // const res = await axiosInstance.get('https://fakestoreapi.com/products');
    const res = yield call(
      axiosInstance.get,
      'https://fakestoreapi.com/products',
    );
    yield put({type: 'LOAD_PRODUCTS_SUCCESS', payload: res.data});
  } catch (error) {
    yield put({type: 'LOAD_PRODUCTS_FAIL', payload: error});
  }
}

function* addProducts() {}

function* loadProductsRequest() {
  yield takeEvery('LOAD_PRODUCTS_REQUEST', loadProducts);
}

function* addProductRequest() {
  yield takeEvery('ADD_PRODUCTS_REQUEST', addProducts);
}

export default function* rootProducts() {
  yield all([fork(loadProductsRequest), fork(addProductRequest)]);
}
