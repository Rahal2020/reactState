import React, { Component } from 'react'
import image from './myProfile.jpg'

export default class StateClass extends Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
            intervall: null
        };  
    }
    componentDidMount() {
        console.log("Component did Mount()");
        // console.log(this.state.isVisible);
        // console.log(this.state.counter);
        this.setState({
          intervall: setInterval(
            () => this.setState({ timer: this.state.timer + 1 }),
            1000
          )
        });
      }
      componentDidUpdate() {
          console.log("Component did Update()")
      }
      componentWillUnmount() {
          console.log("Component will Unmount()")
      }
     
    render() {
        return (
            <div className="profile">
                <img className="avatar rotate" src= {image} alt='profile'/>
                <h1> D. Rahal Hasnia</h1>
                <p>Docteur En Physique Quantique</p>
                <p> 
                    <ul>
                        <li>AGE: 33</li>
                        <li>ADDRESS: Omran Superieur Tunis</li>
                        <li>E-Mail: rahal.hasnia@gmail.com</li>
                        <li>PHONE: +216 22939434</li>
                    </ul>
                </p>
       <button className="visibility-btn"> {this.state.timer}</button>
            </div>
        );
    }
}

