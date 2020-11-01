import React from 'react'
import elem from './elementos.json'
import './Elementos.css'

export default class Elementos extends React.Component {

	state = {
		title: '',
		info: ''
	}

	hoverOn = (title, info)  => {
		this.setState({
			title: title,
			info: info
		})
	}

	hoverOut = () => {
		this.setState({
			title: '',
			info: ''
		})
	}

	render() {
		return (
			<div className="items">
			{elem.map((e, index) => {
				return (
					<div key={index}>
					<i className={e.icon}
					onMouseEnter={this.hoverOn.bind(this, e.title, e.info)}
					onMouseLeave={this.hoverOut}>
					</i>
					</div>
					)
			})
		}
		<div className="mostrador">
		<h1 className="titulo">{this.state.title}</h1>
		<p className="info">{this.state.info}</p>
		</div>
		</div>
		)
	}
}
