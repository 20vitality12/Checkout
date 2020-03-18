import React from 'react';
import {Link} from "react-router-dom";

function NotFoundPage(props) {
    return (
        <div style={{textAlign: "center"}}>
            404 NotFound <br/>
            <Link to={'/cart'}>Cart</Link>
        </div>
    )
}

export default NotFoundPage;