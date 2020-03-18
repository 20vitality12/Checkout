import React, { useEffect } from 'react';
import connect from 'react-redux/es/connect/connect';
import _ from 'lodash';
import ProductItem from "./ProductItem/ProductItem";
import { getProducts } from "../../actions/actionCreator";
import styles from './ProductList.module.sass';
import { Link } from 'react-router-dom';

function ProductList(props) {
    // eslint-disable-next-line
    useEffect( () => { props.getProducts()},[]);

    const { products, totalPrice } = props;

    return (
        <div>
            { products &&
                <ul>
                    { products && _.map( products, (item, index) => <ProductItem product={item} key={index}/>)}
                </ul>
            }
            <div className={styles.buttonContainer}>
                <div>
                    <p>{(totalPrice && totalPrice.toFixed(2) ) || 0} &#8364;</p>
                    {
                        totalPrice > 0  ? <Link to={'/shipping'}>
                            <div>Buy</div>
                        </Link> :
                        <div className={styles.btn}>
                            <div>Buy</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        totalPrice: state.productReducer.totalPrice,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);