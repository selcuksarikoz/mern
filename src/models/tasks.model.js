import mongoose, { Schema } from 'mongoose';

const TasksSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	done: {
		type: Boolean,
		default: false,
	},
	deadLine: {
		type: Date,
	},
}, {
	timestamps: true,
});

const TasksModel = mongoose.model('Tasks', TasksSchema);

export default TasksModel;
