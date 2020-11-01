import React from 'react'
import Elementos from './components/Elementos'
//import Exponer from './components/Exponer'
import './App.css'

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
			<Elementos/>
			</div>
			)
	}
}