import React, { Component } from 'react'
import Button from './Button.jsx'
import Basket from './Basket.jsx'
import leftbutton from '../assets/left.jpg'
import rightbutton from '../assets/right.png'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftcontainervalue: 100,
            rightcontainervalue: 0
        };
    }

    handleleftbuttonclick = () => {
        if (this.state.rightcontainervalue > 0) {
            this.setState(prevState => ({
                leftcontainervalue: prevState.leftcontainervalue + 1,
                rightcontainervalue: prevState.rightcontainervalue - 1
            }));
            console.log("Left Button Clicked");
        }
    }

    handlerightbuttonclick = () => {
        if (this.state.leftcontainervalue > 0) {
            this.setState(prevState => ({
                leftcontainervalue: prevState.leftcontainervalue - 1,
                rightcontainervalue: prevState.rightcontainervalue + 1
            }));
            console.log("Right Button Clicked");
        }
    }

    render() {
        return (
            <div className="container">
                <Basket value={this.state.leftcontainervalue} baskettype="basket1" />
                
                <Button 
                    handlebuttonclick={this.handleleftbuttonclick} 
                    buttonimage={leftbutton} 
                    buttontext="Left" 
                />
                
                <Button 
                    handlebuttonclick={this.handlerightbuttonclick} 
                    buttonimage={rightbutton} 
                    buttontext="Right" 
                />
                
                <Basket value={this.state.rightcontainervalue} baskettype="basket2" />
            </div>
        );
    }
}

export default Container;