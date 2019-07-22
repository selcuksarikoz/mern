import React from 'react';
import dateformat from 'dateformat';

import './item.style.scss';

const Item = (props) => {
	const { done, title, deadLine, key, toggle, _id } = props;
	const converDate = dateformat(deadLine, 'dd-mm-yyyy');
	return (
		<div className={"item " + (done ? 'done' : '')}>

			<label htmlFor={key}>
				<div className="item__title">
					{title}
				</div>
				<input type="checkbox" onChange={() => toggle({
					_id, done, title, deadLine
				})} name={key} id={key} checked={done} />
				<span></span>
			</label>

			<div className="item__deadline">
				{converDate}
			</div>
		</div>
	)
}

export default Item;