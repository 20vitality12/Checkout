import ACTION from './actionsTypes';

export const getProducts = () => ({
    type: ACTION.GET_PRODUCTS_ACTION,
});

export const pushProduct = (product, count) => ({
    type: ACTION.PUSH_PRODUCT_ACTION,
    product, count
});

export const popProduct = (product, count) => ({
    type: ACTION.POP_PRODUCT_ACTION,
    product, count
});

export const removeProduct = (product, count) => ({
    type: ACTION.REMOVE_PRODUCT_ACTION,
    product, count
});