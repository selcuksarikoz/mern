import express from 'express';
import TasksModel from '../models/tasks.model';

const router = express.Router();

// get all
router.get('/', async (req, res, next) => {
	const { skip, limit } = req.body;

	const result = await TasksModel.find()
		.skip(skip)
		.limit(limit);

	return res.send(result);
});

// task create
router.post('/', async (req, res, next) => {
	const { title, deadLine } = req.body;

	if (!title || !deadLine) {
		return res.status(500).send({
			message: 'fields missing...',
		});
	}

	const newItem = new TasksModel({
		title,
		deadLine,
	});

	const result = await newItem.save();

	return res.send(result);
});

// task update
router.patch('/', async (req, res, next) => {
	const { id, title, deadLine, done } = req.body;

	// if (!title || !deadLine) {
	// 	return res.status(500).send({
	// 		message: 'fields missing...',
	// 	});
	// }

	const result = await TasksModel.findOneAndUpdate({
		_id: id,
	}, {
			$set: {
				title,
				deadLine,
				done,
			},
		});

	return res.send(result);
});

// task delete
router.delete('/:id', async (req, res, next) => {
	const { id } = req.params;

	if (!id) {
		return res.status(500).send({
			message: 'fields missing...',
		});
	}

	const result = await TasksModel.findByIdAndRemove({ _id: id });
	return res.send(result);
});

export default router;
