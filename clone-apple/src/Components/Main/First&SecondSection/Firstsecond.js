import React, { Component } from 'react'
import Links from '../../Links'

class Firstsecond extends Component {
  render() {
    return (
      <div>
        <section class="first-hightlight-wrapper">
		<div class="container">

			<div class="new-alert">
				New
			</div>

			<div class="title-wraper bold black">
				iPad Pro 
			</div> 

			<div class="links-wrapper">
				<ul>
                <Links linkName='Learn more' linkUrl='/#'/>
                <Links linkName='Order' linkUrl='/#'/>
				</ul> 
			</div>

			<div class="ipod-caption row">
				<div class="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
				<div class="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
			</div>
		</div>
	</section>
    <section class="second-hightlight-wrapper">
		<div class="container">

			<div class="new-alert">
				New
			</div>

			<div class="title-wraper bold black">
				MacBook Air 
			</div> 

			<div class="description-wrapper black">
				Twice the speed. Twice the storage.
			</div>

			<div class="price-wrapper grey">
				From $999.
			</div>

			<div class="links-wrapper">
				<ul>
					<Links linkName='Learn more' linkUrl='/#'/>
					<Links linkName='Buy' linkUrl='/#'/>
				</ul> 
			</div>
		</div>
	</section>
      </div>
    )
  }
}
export default Firstsecond