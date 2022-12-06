import mongoose from 'mongoose';
import Database from '../database/index.js';

const GeneroSchema = new mongoose.Schema(
	{
		descricao: {
			type: String,
			required: true,
		},
	},
	{
		collection: 'genero',
		timestamps: true,
	},
);

const Genero = Database.select('liv_livros').model('Genero', GeneroSchema);
export default Genero;
