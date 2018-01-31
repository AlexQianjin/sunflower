import React from 'react';

class Form extends React.Component{
	render() {
		return (
			<div>
				<div>
					<label for="username">Username</label>
					<input id="username" type="textbox"/>
				</div>
				<div>
					<label for="password">Password</label>
					<input id="password" type="textbox"/>
				</div>
				<div>
					<button id="login" type="button">Log in</button>
				</div>
			</div>
		);
	}
}

export default Form;