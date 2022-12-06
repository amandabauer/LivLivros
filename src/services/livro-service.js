import Livro from "../models/livro.js";

export default class LivroService {
	findById = async (id) => {
		return Livro.findById(id)
			.then((livro) => {
				return livro;
			})
			.catch((err) => {
                console.log(`Erro: ${err}!`);
                return err;
            });
	};

	findAll = async() => {
		return Livro.find()
			.then((livros) => {
				livros?.forEach(g => {
					console.log(g);
				});
				return livros;
			})
			.catch((err) => {
                console.log(`Erro: ${err}!`);
                return err;
            });
	};

	create = async (data) => {
		const { nome, autor, generoId } = data;
		const newLivro = Livro({
			nome,
			autor,
			generoId
		});
		return newLivro.save();
	};

}