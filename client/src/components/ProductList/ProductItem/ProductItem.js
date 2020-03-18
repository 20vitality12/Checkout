import React, { useState } from 'react';
import styles from './ProductItem.module.sass';
import connect from 'react-redux/es/connect/connect';
import { pushProduct, popProduct, removeProduct } from "../../../actions/actionCreator";

function ProductItem(props) {
    const { product } = props;
    const { name, image, description, price } = props.product;
    const [count, setCount] = useState(0);

    function amountChoice(props) {
        return (
            <div className={`${styles.amountChoiceContainer} + ${styles.activeContainer}`}>
                <div className={styles.amountChoice}>
                    <i className="far fa-plus-square" onClick={() => {if(count !== 50){setCount(count + 1 );props.pushProduct(product, count + 1)}}}/>
                    <input readOnly value={count} onChange={e => setCount(e.target.value)} min="0" max="50" type="number"/>
                    <i className="far fa-minus-square" onClick={() => {if(count!==0){setCount(count - 1 );props.popProduct(product, count - 1)}}}/>
                </div>
            </div>
        )
    }

    return(
        <div className={styles.productCardContainer}>
            <div className={styles.productImage}>
                <img src={`${image}`} alt="card-img"/>
            </div>

            <div className={styles.productDescription}>
                {<h3>{ name } </h3>}
                {<p>{ description } </p>}
            </div>
            {amountChoice(props)}
            <div className={styles.priceContainer}>
                <i onClick={() => {setCount(0 );props.removeProduct(product, count)}} className="far fa-trash-alt"/>
                {amountChoice(props)}
                {<p>{ price } &#8364;</p>}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    removeProduct: (product, count) => dispatch(removeProduct(product, count)),
    pushProduct: (product, count) => dispatch(pushProduct(product, count)),
    popProduct: (product, count) => dispatch(popProduct(product, count)),
});

export default connect(null, mapDispatchToProps)(ProductItem);