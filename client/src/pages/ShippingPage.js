import React, {useEffect} from 'react';
import ShippingForm from "../components/ShippingForm/ShippingForm";
import connect from 'react-redux/es/connect/connect';
import { getTotalPrice } from "../actions/actionCreator";

function ShippingPage(props) {
    const { totalPrice } = props;
    function submit(values) {
        console.log(values);
        alert(`Username: ${values.username}   E-mail: ${values.email} `);
    }
    return (
        <div>
            <ShippingForm onSubmit={submit} totalPrice={totalPrice}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    totalPrice: state.productReducer.totalPrice
});

export default connect(mapStateToProps, null)(ShippingPage);