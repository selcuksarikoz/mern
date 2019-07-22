import React, { PureComponent } from 'react'

import './item.style.scss';

export default class Item extends PureComponent {
	render() {
		const { done, title, deadLine, key, toggle, _id } = this.props;
		return (
			<div className="item">

					<label htmlFor={key}>
						{title}
						<input type="checkbox" onChange={()=> toggle({
							_id, done, title, deadLine
							})} name={key} id={key} checked={done} />
						<span></span>
					</label>
			</div>
		)
	}
}
