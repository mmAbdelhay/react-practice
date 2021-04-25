import React from 'react';
import './footer.css';

class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name
        }
    }
    render() {
        return (
            <footer className="bg-dark text-center text-lg-start footer">
                <div className="text-center p-3">
                    {this.state.name}  © 2020 Copyright:
                    <a className="text-light" href="https://mdbootstrap.com/">  MDBootstrap.com</a>
                </div>
            </footer>
        )
    }
}

export default Header;
