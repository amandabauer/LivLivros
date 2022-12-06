import express from 'express';

import generoRouter from './genero/genero-router.js';
import livroRouter from './livro/livro-router.js';
import notaRouter from './nota/nota-router.js';

const apiRouters = express.Router();

apiRouters.use('/genero', generoRouter);
apiRouters.use('/livro', livroRouter);
apiRouters.use('/nota', notaRouter);

export default apiRouters;
