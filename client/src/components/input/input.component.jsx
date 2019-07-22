import React, { PureComponent } from 'react';

import './input.style.scss';

export default class Input extends PureComponent {
	render() {
		return (
			<input className="inputs" {...this.props}/>
		)
	}
}
