import express from 'express';
import GeneroService from '../../services/genero-service.js';

const generoRouter = express();

generoRouter.get("/:id", (req, res, next) => { 
    new GeneroService()
		.findById(req.params.id)
		.then((result) => res.json(result))
		.catch((err) => res.status(500).send(`Erro: ${err}!`));
});

generoRouter.get("/", (req, res, next) => { 
    new GeneroService()
		.findAll()
		.then((result) => res.json(result))
		.catch((err) => res.status(500).send(`Erro: ${err}!`));
});

generoRouter.post("/create", (req, res, next) => { 
    new GeneroService()
        .create(req.body)
        .then((genero) => {
            res.json(genero);
        })
        .catch((err) => res.status(500).send(`Erro: ${err}!`)); 
});

export default generoRouter;