import express from 'express';
import LivroService from '../../services/livro-service.js';

const livroRouter = express();

livroRouter.get("/:id", (req, res, next) => { 
    new LivroService()
		.findById(req.params.id)
		.then((result) => res.json(result))
		.catch((err) => res.status(500).send(`Erro: ${err}!`));
});

livroRouter.get("/", (req, res, next) => { 
    new LivroService()
		.findAll()
		.then((result) => res.json(result))
		.catch((err) => res.status(500).send(`Erro: ${err}!`));
});

livroRouter.post("/create", (req, res, next) => { 
    new LivroService()
        .create(req.body)
        .then((livro) => {
            res.json({
                nome: livro.nome,
                autor: livro.autor,
                generoId: livro.generoId,
            });
        })
        .catch((err) => res.status(500).send(`Erro: ${err}!`)); 
});

export default livroRouter;