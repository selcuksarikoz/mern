import React, { PureComponent } from 'react'

import './column.style.scss';

export default class Column extends PureComponent {
	render() {
		const {title} = this.props;
		return (
			<div className="column">
				{
					title && (<div className="column__title">{title}</div>)
				}

				{this.props.children}
			</div>
		)
	}
}
