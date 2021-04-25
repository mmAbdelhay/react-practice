import './App.css';
import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

class App extends React.Component {

    constructor() {
        super();
        this.state ={
            name:"Muhammad Abdelhay",
            count:1
        }
    }

    changeName= ()=>{
        this.setState({name:'ali'});
    }

    changeCount=(op)=>{
        if(op === '+'){
            this.setState({count:this.state.count+1})
        }else if(op === '-'){
            this.setState({count:this.state.count-1})
        }
    }

    render() {
        return (
            <>
                <Header/>
                <div className="container"><br/>
                    <p className="p">Welcome {this.state.name} </p>
                    <button onClick={this.changeName} className="btn btn-primary">change name</button><br/>
                    <div> count : {this.state.count}</div>
                    <button onClick={()=>this.changeCount("+")} className="btn btn-primary">increase</button>
                    <button onClick={()=>this.changeCount("-")} className="btn btn-primary">decrease</button>
                </div>
                <Footer name={this.state.name}/>
            </>
        );
    }
}

export default App;
