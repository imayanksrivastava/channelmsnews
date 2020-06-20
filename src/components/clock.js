import React, { Component } from 'react';
const optionsDate = { weekday: 'long',  month: 'long', day: 'numeric' };


class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {datetime: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            datetime: new Date()
        })
    }
    render(){
    return (
        <div>
            <p>{this.state.datetime.toLocaleDateString('en-US', optionsDate)} {this.state.datetime.toLocaleTimeString('en-US')}</p>
        </div>
    );
  }
}

export default Clock;
  