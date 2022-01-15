import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props) {
         super(props)
         this.state = {
           fullName: 'lilia ansari',
           digit: 0,
           date: new Date().toLocaleString(),
           time: new Date().toLocaleTimeString(),
           seconds: new Date().getSeconds(),
         };
         console.log('LifecycleB Constructor')
     }

     static getDerivedStatFromProps(props, state) {
         console.log('LifecycleB getDerivedStatFromProps')
         return null
     }
     componentDidMount() {
         this.myTimer = setInterval(()=>{
             this.setState(prevState => ({
                 digit: prevState.digit +1,
                 date: new Date().toLocaleString(),
                 time: new Date().toLocaleTimeString(),
                 seconds: new Date().getSeconds(),
             }));
         }, 1000);
         console.log('LifecycleB componentDidMount')
     };
    clearInterval = () => {
       clearInterval(this.myTimer);
    };
    render() {
        const { digit, date, time, seconds } = this.state;
        return (
            <div>
                counter: {digit}
                <br/>
                {date}
                <br/>
                {time}
                <br/>
                {seconds}
                <br/>
                <button onClick={this.clearInterval}>Clear</button>
            </div>
        );
    }
}

export default LifecycleB
