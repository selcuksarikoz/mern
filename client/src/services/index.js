import axios from 'axios';

const URL = "http://localhost:4000/tasks"

export const GetTodo = async () => {
	return await axios.get(URL)
}

export const saveTodo = async (data) => {
	return await axios.post(URL, data)
}

export const updateTodo = async (data) => {
	console.log(data)
	return await axios.patch(URL, data)
}