import mongoose from 'mongoose';
import Genero from './genero.js';
import Database from '../database/index.js';

const LivroSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true,
		},
		autor: {
			type: String,
			required: true,
		},
		generoId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			reference: 'Genero',
		},
	},
	{
		collection: 'livro',
		timestamps: true,
	},
);

const virtualGenero = LivroSchema.virtual('virtualGenero');
virtualGenero.get((value, virtual, liv) => {
	return Genero.find({
		$in: [liv.generoId],
	});
});

LivroSchema.index({ nome: 1 }, { unique: true });

const Livro = Database.select('liv_livros').model('Livro', LivroSchema);
export default Livro;