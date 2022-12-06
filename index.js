import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRouters from './src/routers/index.js';

const app = express();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', apiRouters);

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});