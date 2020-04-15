let Timer = React.createClass({
	getInitialState(){
		return {
			time: 0,
			isPaused: true
		};
	},

	//func to start timer 
	handleStart(){
		this.timer = setInterval(this.tick, 1000);
		this.setState({isPaused: false});
	},

	// func to pause timer
	handlePause(){
		clearInterval(this.timer);
		this.setState({isPaused: true});
	},

	//func to restart timer
	handleRestart(){
		clearInterval(this.timer);
		this.setState({
			time: 0,
			isPaused: true
		});
	},

	//func to increase state seconds
	tick(){
		this.setState({time: this.state.time + 1});
	},

	//clear inteval when component unmount
	componentWillUnmount(){
		clearInterval(this.timer);
	},

	render(){
		let {isPaused, time} = this.state,
			minutes = Math.floor(time / 60),
			seconds = time % 60;
		return (
		<div className = "timer">
			{isPaused ? <button className = "btn-start" onClick = {this.handleStart}><i className ="fas fa-play"></i></button>:
			<button className = "btn-pause" onClick = {this.handlePause}><i className="fas fa-pause"></i></button>}
			<span className = "time">{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</span>
			<button className = "btn-restart" onClick = {this.handleRestart}><i className="fas fa-sync-alt"></i></button>
		</div>);

	}
});

ReactDOM.render(<Timer/>, document.getElementById('content'));