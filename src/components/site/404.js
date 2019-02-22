import React, { Component } from 'react'
import imgs from '../../images'

class Home extends Component {
    randonImg(){
        let h = (-302 * Math.floor(Math.random() * 3) + 1)+"px"
        let w = (-418 * Math.floor(Math.random() * 3) + 1)+"px"
        console.log(h,w)
        return (
            <div class="mainError">
                <center>
                    <h1>OPS...</h1>
                    <p>Pagina não encontrada.</p>
                </center>
            </div>
            )
    }

    render(){
		return (
			<div className="page">  
				{this.randonImg()}
	        </div>
		)
	}

}

export default Home