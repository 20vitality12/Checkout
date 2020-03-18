const axios = require('axios');

async function getProducts(req, res, next) {
    try {
        const {data} = await axios.get('http://5e6be7bbd708a000160b4eb1.mockapi.io/api/products');

        res.send(data)
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getProducts
};