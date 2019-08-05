import React from 'react';

class Home extends React.Component {
    constructor(){
        super();
        // console.log("run")
        // this.counter = 0;
        this.state = {
            counter : localStorage.getItem("counter") || 0
        }

        // setInterval(()=> {
        //     // this.state.counter+=1
        //     this.setState({
        //         counter : this.state.counter+1
        //     })
        // },1000)
        
    }
    buttonClick(){
        // alert(1)
        // console.log("runingggggggggggg")
        // this.counter++
        localStorage.setItem("counter", this.state.counter+1)
        
        this.setState({
            counter : this.state.counter+1
        })
    }
    render(){
        // console.log("Home Page.......")
        return(
            <div>
                Home Page
                {this.state.counter}
                {/* {console.log("Hoga")} */}
                <button onClick={() => this.buttonClick()}>Click Me</button>
            </div>
        )
    }
}

export default Home;