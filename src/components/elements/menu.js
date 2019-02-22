 // menu/index.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Imgs from '../../images'

class Menu extends Component {



  	render() {
    	return (
			<div className="menu">
				<div className="menuItem">
					<Link to="/">
					    <h2 className="menuFont textRight">
                            Home
                        </h2>
                    </Link>
                    <Link to="/manager">
                        <h2 className="menuFont textRight">
                            MANAGER
                        </h2>
                    </Link>
				</div>
			</div>
	    );
  	}

}

export default Menu;
