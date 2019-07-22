import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Column, Input, Button, Item } from '../../components';
import './app.style.scss';


import { fetchTodos } from './app.actions';

import { saveTodo, updateTodo } from '../../services'


class App extends Component {

	state = {
		text: "",
		deadLine: new Date()
	}
	componentDidMount() {
		const { fetchTodos } = this.props;
		fetchTodos();
	}

	getDone = () => {
		return this.props.Tasks.filter(todo => todo.done).map((todo, index) => (
			<Item key={index} {...todo} toggle={this.toggle} />
		))
	}

	getUnDone = () => {
		return this.props.Tasks.filter(todo => !todo.done).map((todo, index) => (
			<Item key={index} {...todo} toggle={this.toggle} />
		))
	}


	// services
	save = async () => {
		const timestamp = new Date().getTime(this.state.deadLine);
		const result = await saveTodo({
			title: this.state.text,
			deadLine: timestamp
		})

		if (result.status === 200) {
			this.setState({
				text: "",
				deadLine: ""
			});
			this.props.fetchTodos();
		} else {
			console.log('hata', result)
		}
	}

	toggle = async (params) => {
		const result = await updateTodo({
			id: params._id,
			done: !params.done,
			title: params.title,
			deadLine: params.deadLine
		})

		if (result.status === 200) {
			this.props.fetchTodos();
		}
	}

	render() {
		return (
			<div className="container">

				<Column title={"New"}>
					<Input onChange={(e) => this.setState({ text: e.target.value })} value={this.state.text} type="text" />
					<Input onChange={(e) => this.setState({ deadLine: e.target.value })} value={this.state.deadLine} type="date" />
					<Button onClick={this.save} value="Save" />
				</Column>

				<Column title={"Todo"}>
					{this.props.Tasks && this.getUnDone()}
				</Column>


				<Column title={"Done"}>
					{this.props.Tasks && this.getDone()}
				</Column>


			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		Tasks: state.Tasks.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTodos: () => dispatch(fetchTodos())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)