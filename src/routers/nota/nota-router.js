import express from 'express';
import NotaService from '../../services/nota-service.js';
const notaRouter = express();

notaRouter.get("/:id", (req, res, next) => { 
    new NotaService()
		.findById(req.params.id)
		.then((result) => res.json(result))
		.catch((err) => res.status(500).send(`Erro: ${err}!`));
});

notaRouter.get("/", (req, res, next) => { 
    new NotaService()
		.findAll()
		.then((result) => res.json(result))
		.catch((err) => res.status(500).send(`Erro: ${err}!`));
});

notaRouter.post("/create", (req, res, next) => { 
    new NotaService()
        .create(req.body)
        .then((nota) => {
            res.json({
                nota: nota.nota,
                livroId: nota.livroId,
                pessoa: nota.pessoa,
                idadePessoa: nota.idadePessoa,
                avaliacao: nota.avaliacao,
            });
        })
        .catch((err) => res.status(500).send(`Erro: ${err}!`)); 
});

export default notaRouter;