import React, { Component } from 'react'
import icon from '../../Resources/images/icons/logo-sm.png'
import search from '../../Resources/images/icons/search-icon-sm.png'
import cart from '../../Resources/images/icons/cart-sm.png'
import Links from '../Links'

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  isOpen: false 
		};
	  }
	
	  toggleNavbar = () => {
		this.setState({ isOpen: !this.state.isOpen });
	  }
	
  render() {
    return (
		<div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse" onClick={this.toggleNavbar}>
			        ☰
			    </button>
			    <a className="navbar-brand" href="/#"><img src={icon}alt=''/></a>

			    <div className={"navbar-collapse " + (this.state.isOpen ? "show" : "collapse")}>
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<Links linkName='Mac' linkUrl='/#'/>
						<Links linkName='iphone' linkUrl='/#'/>
						<Links linkName='ipad' linkUrl='/#'/>
						<Links linkName='Watch' linkUrl='/#'/>
						<Links linkName='Tv' linkUrl='/#'/>
						<Links linkName='Music' linkUrl='/#'/>
						<Links linkName='Support' linkUrl='/#'/>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search}alt=''/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}alt=''/></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
    )
  }
}
export default Navbar