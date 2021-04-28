import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Form from './components/form/form'
import List from "./components/list/List";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Muhammad Abdelhay",
            count: 1
        }
    }

    changeName = () => {
        this.setState({name: 'ali'});
    }

    changeCount = (op) => {
        if (op === '+') {
            this.setState({count: this.state.count + 1})
        } else if (op === '-') {
            this.setState({count: this.state.count - 1})
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <div className="container"><br/>
                    <Switch>
                        <Route path="/">
                            <p className="p">Welcome {this.state.name} </p>
                            <button onClick={this.changeName} className="btn btn-primary">change name</button>
                        </Route>
                        <Route path="/counter">
                            <div> count : {this.state.count}</div>
                            <button onClick={() => this.changeCount("+")} className="btn btn-primary">increase</button>
                            <button onClick={() => this.changeCount("-")} className="btn btn-primary">decrease</button>
                        </Route>
                        <Route path="/form" component={Form} />
                        <Route path="/list" component={List} />
                    </Switch>
                </div>
                <Footer name={this.state.name}/>
            </Router>
        );
    }
}

export default App;
