import mongoose from 'mongoose';
import Livro from './livro.js';
import Database from '../database/index.js';

const NotaSchema = new mongoose.Schema(
	{
		livroId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			referece: 'Livro',
		},
		pessoa: {
			type: String,
			required: true,
		},
		idadePessoa: {
			type: Number,
			required: true,
		},
		nota: {
			type: Number,
			required: true,
		},
		avaliacao: {
			type: String,
			required: true,
		},
	},
	{
		collection: 'nota',
		timestamps: true,
	},
);

const virtualLivro = NotaSchema.virtual('virtualLivro');
virtualLivro.get((value, virtual, nota) => {
	return Livro.find({
		$in: [nota.livroId],
	});
});

NotaSchema.index({ pessoa: 1 });
NotaSchema.index({ livroId: 1 });

const Nota = Database.select('liv_livros').model('Nota', NotaSchema);
export default Nota;