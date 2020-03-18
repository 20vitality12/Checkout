const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('config');
const router = require('./router/index');
const PORT = config.get('port') || 5000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));