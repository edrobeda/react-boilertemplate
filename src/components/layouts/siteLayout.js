import React from 'react'
import Menu from '../elements/menu.js'
import Footer from '../elements/footer.js'

class SiteLayout extends React.Component{
	render(){
		return (
			<div className="site" style={{ 'fontFamily': "'Roboto Slab', serif"}}>
				<div class="wrapper">
					<Menu />
					{this.props.children}
					<Footer />
				</div>
			</div>
		)
	}
}
export default SiteLayout
