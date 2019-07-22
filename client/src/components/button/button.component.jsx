import React from 'react'

import './button.style.scss'

const Button = (props) => {
	const { value, onClick } = props;
	return (
		<button className="btn-save" type="submit" onClick={onClick}>{value}</button>
	)
}

export default Button;
