import React, { Component } from 'react'
import logo from '../../../Resources/images/icons/apple-tv-logo.png'
import banker from '../../../Resources/images/home/banker.png'
import watch from '../../../Resources/images/icons/watch-series5-logo.png'
import arcade from '../../../Resources/images/icons/arcade.png'
import Links from '../../Links'

class Fifthsixth extends Component {
  render() {
    return (
      <div>
        <section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={logo}alt=''/>
							</div>
						</div>

						<div className="tvshow-logo-wraper">
							<img src={banker}alt=''/>
						</div>

						<div className="watch-more-wrapper">
							<a href="#">Watch now on the Apple TV App</a>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={watch}alt=''/>
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.<br/>
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper ">
							<ul>
                                <Links linkName='Learn more' linkUrl='/#'/>
                                <Links linkName='Buy' linkUrl='/#'/>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
    <section className="sixth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={arcade}alt=''/>
							</div>
						</div>
						<div className="description-wraper white">
							Agent 8 is a small hero on a big mission.
						</div>
						<div className="links-wrapper">
							<ul>
                            <Links linkName='Play now' linkUrl='/#'/>
                            <Links linkName='Learn about Apple Arcade' linkUrl='/#'/>
							</ul> 
						</div>						
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="title-wraper">
							Apple Card Monthly Installments 
						</div> 
						<div className="description-wraper">
							Pay for your next iPhone over time, interest-free with Apple Card.
						</div>
						<div className="links-wrapper">
							<ul>
								<Links linkName='Learn more' linkUrl='/#'/>
								<Links linkName='Apply now' linkUrl='/#'/>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
   </div>
    )
  }
}
export default Fifthsixth