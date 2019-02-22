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
                        <div className="mainFont textRight">
                            <img className="logo" src={Imgs.logo} alt=""/>
                        </div>
                    </Link>
                </div>
				<div className="menuItem">
					<Link to="/">
					    <div className="mainFont textRight">
                            Home
                        </div>
                    </Link>
				</div>
                <div className="menuItem">
                    <Link to="/manager">
                        <div className="mainFont textRight">
                            MANAGER
                        </div>
                    </Link>
                </div>
                <div className="menuItem">
                    <Link to="/manager">
                        <div className="mainFont textRight">
                            MANAGER
                        </div>
                    </Link>
                </div>
			</div>
	    );
  	}

}

export default Menu;
