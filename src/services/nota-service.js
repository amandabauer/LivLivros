import Nota from '../models/nota.js'

export default class NotaService {
	findById = async (id) => {
		return Nota.findById(id)
			.then((nota) => {
				return nota;
			})
			.catch((err) => {
                console.log(`Erro: ${err}!`);
                return err;
            });
	};

	findAll = async() => {
		return Nota.find()
			.then((notas) => {
				notas?.forEach(g => {
					console.log(g);
				});
				return notas;
			})
			.catch((err) => {
                console.log(`Erro: ${err}!`);
                return err;
            });
	};

	create = async (data) => {
		const { livroId, pessoa, idadePessoa, nota, avaliacao } = data;
		const newNota = Nota({
			livroId, 
			pessoa, 
			idadePessoa,
			nota, 
			avaliacao
		});
		return newNota.save();
	};

}