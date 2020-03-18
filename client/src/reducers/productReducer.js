import ACTION from '../actions/actionsTypes';

const initialState = {
    totalPrice: null,
    products: null,
    isFetching: false,
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {
        ///GET_PRODUCTS///
        case ACTION.GET_PRODUCTS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case ACTION.GET_PRODUCTS_RESPONSE: {
            return {
                ...state,
                products: action.products,
                totalPrice: 0,
                isFetching: false,
                error: null,
            };
        }
        case ACTION.GET_PRODUCTS_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };
        }
        ///PUSH_PRODUCT///
        case ACTION.PUSH_PRODUCT_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case ACTION.PUSH_PRODUCT_RESPONSE: {
            return {
                ...state,
                totalPrice: state.totalPrice + action.price,
                isFetching: false,
                error: null,
            };
        }
        case ACTION.PUSH_PRODUCT_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };
        }
        ///POP_PRODUCT///
        case ACTION.POP_PRODUCT_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case ACTION.POP_PRODUCT_RESPONSE: {
            return {
                ...state,
                totalPrice: state.totalPrice - action.price,
                isFetching: false,
                error: null,
            };
        }
        case ACTION.POP_PRODUCT_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };
        }
        ///REMOVE_PRODUCT///
        case ACTION.REMOVE_PRODUCT_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case ACTION.REMOVE_PRODUCT_RESPONSE: {
            return {
                ...state,
                totalPrice: state.totalPrice - (action.product.price * action.count),
                cart: action.cart,
                isFetching: false,
                error: null,
            };
        }
        case ACTION.REMOVE_PRODUCT_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false,
            };
        }
        default: {
            return state;
        }
    }
};