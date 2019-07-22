import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import bluebird from 'bluebird';

// import api
import TaskApi from './src/api/tasks.api';

const app = express();
const PORT = process.env.PORT || 3000;

// mongo connect
mongoose.Promise = bluebird;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('Mongo connected'))
	.catch(err => console.log(err));

// express use
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express router use
app.use('/tasks', TaskApi);

app.get('/', (req, res) => {
	res.status(200).send({
		message: 'Getir test case api...',
	});
});

// production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log('server ready...'));
