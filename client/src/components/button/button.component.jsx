import React, { PureComponent } from 'react'

import './button.style.scss'

export default class Button extends PureComponent {
	render() {
		return (
			<button className="btn-save" type="submit" onClick={this.props.onClick}>{this.props.value}</button>
		)
	}
}
