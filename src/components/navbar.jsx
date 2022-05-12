import React, {PureComponent} from 'react';

class Navbar extends PureComponent {

    render() {
        console.log('nav');
        return (
            <nav className="navbar">
               <span className="navbar-logo"> <i className='fas fa-leaf'></i> </span>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;