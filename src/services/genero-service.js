import Genero from '../models/genero.js';

export default class GeneroService {
	findById = async (id) => {
		return Genero.findById(id)
			.then((genero) => {
				return genero;
			})
			.catch((err) => {
                console.log(`Erro: ${err}!`);
                return err;
            });
	};

	findAll = async() => {
		return Genero.find()
			.then((generos) => {
				generos?.forEach(g => {
					console.log(g);
				});
				return generos;
			})
			.catch((err) => {
                console.log(`Erro: ${err}!`);
                return err;
            });
	};

	create = async (data) => {
		const { descricao } = data;
		const newGenero = Genero({
			descricao,
		});
		return newGenero.save();
	};

}