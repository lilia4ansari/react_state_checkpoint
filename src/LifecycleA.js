import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
         this.state = {
           fullName: 'lilia ansari',
           digit: 0,
           date: new Date().toLocaleString(),
           time: new Date().toLocaleTimeString(),
           seconds: new Date().getSeconds(),
         };
         console.log('LifecycleA Constructor')
     }

     static getDerivedStatFromProps(props, state) {
         console.log('LifecycleA getDerivedStatFromProps')
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
         console.log('LifecycleA componentDidMount')
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
              <LifecycleB/>
            </div>
        );
    }
}

export default LifecycleA
