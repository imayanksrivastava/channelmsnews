import React, { Component } from 'react';
const optionsDate = { weekday: 'long',  month: 'long', day: 'numeric' };


class date extends Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()}
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
            date: new Date()
        })
    }
    render(){
    return (
        <div>
            <p>{this.state.date.toLocaleDateString('en-US', optionsDate)}</p>
        </div>
    );
  }
}

export default date;
  