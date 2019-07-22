import React from 'react'

import './column.style.scss';

const Column = (props) => {
	const { title, children } = props;
	return (
		<div className="column">
			{
				title && (<div className="column__title">{title}</div>)
			}

			{children}
		</div>
	)
}

export default Column;