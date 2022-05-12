import React, {Component} from 'react';

class Navbar extends Component {

    render() {
        return (
            <section className="navbar">
               <span className="navbar-logo"> <i className='fas fa-leaf'></i> </span>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.callCount()}</span>
            </section>
        );
    }
}

export default Navbar;